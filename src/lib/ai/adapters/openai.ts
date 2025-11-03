import { env, assertServerEnv } from "../../env";
import { AIAdapter, AISmartYaml, PanelSuggestion, PanelSuggestionSchema } from "../types";
import { buildSuggestPanelsPrompt } from "../prompts/suggestPanels";
import { buildExplainSqlPrompt } from "../prompts/explainSql";

async function callOpenAI(messages: Array<{ role: "system" | "user"; content: string }>) {
    assertServerEnv();
    const url = env.OPENAI_BASE_URL || "https://api.openai.com/v1/chat/completions";

    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: env.AI_MODEL,
            temperature: 0.2,
            messages,
            response_format: env.AI_JSON_STRICT ? { type: "json_object" } : undefined,
        }),
        signal: AbortSignal.timeout(env.AI_TIMEOUT_MS),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`OpenAI error (${res.status}): ${text}`);
    }
    return res.json();
}

function parseJsonArrayOrThrow<T>(raw: any, path: string, validator: (v: unknown) => T): T {
    // If using response_format: json_object, many providers wrap in {json: "..."} or tool outputs
    // We try best-effort parsing.
    let candidate: unknown = raw;
    if (raw?.choices?.[0]?.message?.content) {
        try {
            candidate = JSON.parse(raw.choices[0].message.content);
        } catch {
            // If it's already an array/object, keep as is
            candidate = raw.choices[0].message.content;
        }
    }
    if (typeof candidate === "string") {
        candidate = JSON.parse(candidate);
    }
    return validator(candidate);
}

export const openAIAdapter: AIAdapter = {
    async suggestPanels({ yaml }: { yaml: AISmartYaml }): Promise<PanelSuggestion[]> {
        const { system, user } = buildSuggestPanelsPrompt(yaml);

        const raw = await callOpenAI([
            { role: "system", content: system },
            { role: "user", content: JSON.stringify(user) },
        ]);

        // Expect an array of PanelSuggestion
        const parsed = parseJsonArrayOrThrow(raw, "choices[0].message.content", (obj) => {
            if (!Array.isArray(obj)) throw new Error("Expected an array of panel suggestions");
            return obj.map((item) => PanelSuggestionSchema.parse(item));
        });
        return parsed;
    },

    async explainSQL({ sql }: { sql: string }): Promise<string> {
        const { system, user } = buildExplainSqlPrompt(sql);
        const raw = await callOpenAI([
            { role: "system", content: system },
            { role: "user", content: JSON.stringify(user) },
        ]);

        const content =
            raw?.choices?.[0]?.message?.content ??
            (() => {
                throw new Error("OpenAI response missing content");
            })();

        return typeof content === "string" ? content : JSON.stringify(content);
    },
};
