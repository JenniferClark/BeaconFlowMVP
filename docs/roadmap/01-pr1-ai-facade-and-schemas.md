# PR1 – AI Provider Facade + v2 Schemas

**Labels:** ai, api, docs, roadmap  
**Milestone:** M1

## 🎯 Goal
Establish v2 canonical YAML schemas (Zod) and a provider-agnostic AI facade (OpenAI primary, xAI optional).

## ✅ Acceptance Criteria
- Zod schema for AI-Smart YAML (v2) defined (`AISmartYamlSchema`)
- Zod schemas for `PanelSuggestion`, `FieldMap`, `ExplainSQL`
- Provider-agnostic AI facade with env-based selection (`AI_PROVIDER`)
- Stub adapters for OpenAI and xAI with shared prompt interfaces
- Typed env loader with clear server/client split
- Failing fast with friendly error if required env is missing

## 🧩 Files / Structure
- `src/lib/ai/schema.ts`
- `src/lib/ai/adapters/openai.ts`
- `src/lib/ai/adapters/xai.ts`
- `src/lib/ai/index.ts`
- `src/lib/env.ts`
- Link spec: `docs/YAML_V1_VS_V2_SPEC.md`

## 🧪 Tests
- Unit: v2 YAML sample validates successfully
- Unit: missing env throws informative error

## 🔗 References
- `docs/architecture.md`
- `docs/ai_providers.md`
