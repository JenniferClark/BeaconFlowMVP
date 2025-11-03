import { z } from "zod";

export const PanelSuggestionSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    chartType: z.enum(["timeseries", "bar", "pie", "table", "scatter"]),
    sql: z.string().min(1),
});

export type PanelSuggestion = z.infer<typeof PanelSuggestionSchema>;

export const FieldMapSchema = z.record(z.string(), z.string());
export type FieldMap = z.infer<typeof FieldMapSchema>;

export const AISmartYamlSchema = z.object({
    app: z.string(),
    org: z.string(),
    stream: z.string(),
    intent: z.string().optional(),
    description: z.string().optional(),
    fields: FieldMapSchema, // required in v2 canonical
    ai_panels: z.array(
        z.object({
            goal: z.string().min(1),
            chartType: z.enum(["timeseries", "bar", "pie", "table", "scatter"]).optional(),
            metrics: z.array(z.string().min(1)).min(1),
        })
    ),
    output_format: z.string().optional(),
});

export type AISmartYaml = z.infer<typeof AISmartYamlSchema>;

// Facade contracts
export interface AIAdapter {
    suggestPanels(input: {
        yaml: AISmartYaml;
    }): Promise<PanelSuggestion[]>;

    inferFieldMap?(input: {
        sampleEvents: unknown[]; // optional future usage
    }): Promise<FieldMap>;

    explainSQL(input: { sql: string }): Promise<string>;
}
