import { env } from "../env";
import type { AIAdapter, AISmartYaml, PanelSuggestion, FieldMap } from "./types";
import { openAIAdapter } from "./adapters/openai";
import { xaiAdapter } from "./adapters/xai";

const registry: Record<string, AIAdapter> = {
    openai: openAIAdapter,
    xai: xaiAdapter,
};

function pickAdapter(): AIAdapter {
    const key = env.AI_PROVIDER in registry ? env.AI_PROVIDER : "openai";
    return registry[key];
}

export const ai = {
    suggestPanels: (args: { yaml: AISmartYaml }): Promise<PanelSuggestion[]> =>
        pickAdapter().suggestPanels(args),

    explainSQL: (args: { sql: string }): Promise<string> =>
        pickAdapter().explainSQL(args),

    inferFieldMap: (args: { sampleEvents: unknown[] }): Promise<FieldMap> => {
        const impl = pickAdapter().inferFieldMap;
        if (!impl) return Promise.resolve({});
        return impl(args);
    },
};
