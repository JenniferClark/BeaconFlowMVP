# PR4 – AI: Infer Field Map + Suggest Panels (Routes)

**Labels:** ai, api, roadmap  
**Milestone:** M3

## 🎯 Goal
Zero-SQL flow: AI generates SQL + chart specs from v2 YAML context.

## ✅ Acceptance Criteria
- `POST /api/ai/infer-fieldmap` (optional when fields absent)
- `POST /api/ai/suggest-panels` returns 4–6 validated panels
- Prompt templates centralized and shared across adapters
- JSON outputs validated with Zod; failed responses retried once

## 🧩 Files / Structure
- `src/app/api/ai/infer-fieldmap/route.ts`
- `src/app/api/ai/suggest-panels/route.ts`
- `src/lib/prompts/*`
- `src/lib/ai/run.ts` (facade call, retries, validation)

## 🧪 Tests
- Contract tests: canned model responses pass schema validation
- Error path: malformed JSON triggers retry & clear error

## 🔗 References
- `docs/ai_providers.md`
