import { env, assertServerEnv } from "../../env";
import { AIAdapter, AISmartYaml, PanelSuggestion, PanelSuggestionSchema } from "../types";
import { buildSuggestPanelsPrompt } from "../prompts/suggestPanels";
import { buildExplainSqlPrompt } from "../prompts/explainSql";

async function callXAI(messages: Array<{ role: "system" | "user"; content: string }>) {
    assertServerEnv();
    const url = `${env.XAI_BASE_URL}/chat/completions`; // compatible path

    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${env.XAI_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: env.XAI_MODEL,
            temperature: 0.2,
            messages,
            // xAI JSON response mode may vary; start simple and rely on strict schema parse after
        }),
        signal: AbortSignal.timeout(env.AI_TIMEOUT_MS),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`xAI error (${res.status}): ${text}`);
    }
    return res.json();
}

function parseJsonArrayOrThrow<T>(raw: any, path: string, validator: (v: unknown) => T): T {
    let candidate: unknown = raw?.choices?.[0]?.message?.content ?? raw;
    if (typeof candidate === "string") {
        candidate = JSON.parse(candidate);
    }
    return validator(candidate);
}

export const xaiAdapter: AIAdapter = {
    async suggestPanels({ yaml }: { yaml: AISmartYaml }): Promise<PanelSuggestion[]> {
        const { system, user } = buildSuggestPanelsPrompt(yaml);
        const raw = await callXAI([
            { role: "system", content: system },
            { role: "user", content: JSON.stringify(user) },
        ]);
        const parsed = parseJsonArrayOrThrow(raw, "choices[0].message.content", (obj) => {
            if (!Array.isArray(obj)) throw new Error("Expected an array of panel suggestions");
            return obj.map((item) => PanelSuggestionSchema.parse(item));
        });
        return parsed;
    },

    async explainSQL({ sql }: { sql: string }): Promise<string> {
        const { system, user } = buildExplainSqlPrompt(sql);
        const raw = await callXAI([
            { role: "system", content: system },
            { role: "user", content: JSON.stringify(user) },
        ]);
        const content =
            raw?.choices?.[0]?.message?.content ??
            (() => {
                throw new Error("xAI response missing content");
            })();

        return typeof content === "string" ? content : JSON.stringify(content);
    },
};
