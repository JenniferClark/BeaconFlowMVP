export function buildExplainSqlPrompt(sql: string) {
    const system = [
        "You explain SQL for OpenObserve dashboards in concise language.",
        "Return plain text (2-4 sentences) with: what it counts, time window, and any grouping."
    ].join(" ");
    const user = { sql };
    return { system, user };
}
