import { AISmartYaml } from "../../ai/types";

export function buildSuggestPanelsPrompt(yaml: AISmartYaml) {
    // System-style instruction
    const system = [
        "You generate OpenObserve dashboard panels.",
        "Return JSON ONLY as an array of PanelSuggestion:",
        `[{ "title": string, "description": string, "chartType": "timeseries"|"bar"|"pie"|"table"|"scatter", "sql": string }]`,
        "Use provided fields; prefer hourly time buckets; default to last 24h in WHERE when relevant.",
    ].join(" ");

    // User/context
    const user = {
        app: yaml.app,
        org: yaml.org,
        stream: yaml.stream,
        intent: yaml.intent ?? "",
        description: yaml.description ?? "",
        fields: yaml.fields,
        ai_panels: yaml.ai_panels,
        output_format: yaml.output_format ?? "openobserve-json",
    };

    return { system, user };
}
