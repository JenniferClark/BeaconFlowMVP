export const env = {
    AI_PROVIDER: process.env.AI_PROVIDER ?? "openai",
    AI_MODEL: process.env.AI_MODEL ?? "gpt-4o-mini",
    AI_JSON_STRICT: (process.env.AI_JSON_STRICT ?? "true") === "true",
    AI_TIMEOUT_MS: Number(process.env.AI_TIMEOUT_MS ?? 12000),
    AI_MAX_RETRIES: Number(process.env.AI_MAX_RETRIES ?? 2),

    OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
    OPENAI_BASE_URL: process.env.OPENAI_BASE_URL ?? "",

    XAI_API_KEY: process.env.XAI_API_KEY ?? "",
    XAI_BASE_URL: process.env.XAI_BASE_URL ?? "https://api.x.ai/v1",
    XAI_MODEL: process.env.XAI_MODEL ?? "grok-4-fast",
};

export function assertServerEnv() {
    const missing: string[] = [];
    if (env.AI_PROVIDER === "openai" && !env.OPENAI_API_KEY) missing.push("OPENAI_API_KEY");
    if (env.AI_PROVIDER === "xai" && !env.XAI_API_KEY) missing.push("XAI_API_KEY");
    if (missing.length) {
        throw new Error(
            `Missing required env vars for AI provider "${env.AI_PROVIDER}": ${missing.join(", ")}`
        );
    }
}
