# PR8 – xAI (Grok) Adapter + Provider Fallback

**Labels:** ai, api, roadmap  
**Milestone:** M3

## 🎯 Goal
Add xAI adapter and optional fallback when primary provider fails or returns invalid schema.

## ✅ Acceptance Criteria
- xAI adapter mirrors OpenAI interface
- Env switch `AI_PROVIDER=xai` works
- Optional fallback `AI_ENABLE_FALLBACK=true` tries secondary on 429/5xx/invalid JSON
- Logs provider used per request

## 🧩 Files / Structure
- `src/lib/ai/adapters/xai.ts`
- `src/lib/ai/index.ts` (provider map + fallback)

## 🧪 Tests
- Contract tests pass for both providers
- Simulated 429 leads to fallback call

## 🔗 References
- `docs/ai_providers.md`
