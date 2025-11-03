# PR10 – Polish, Telemetry, Docs

**Labels:** ui/ux, docs, openobserve, roadmap  
**Milestone:** M5

## 🎯 Goal
Improve UX polish, add app telemetry to OO, and finalize docs.

## ✅ Acceptance Criteria
- Loading skeletons, empty states, copy updates
- App telemetry logs to OO stream `bf_app_logs` (AI timing, schema failures)
- Docs updated: `architecture.md`, `ai_providers.md`, `AI_SMART_YAML_SPEC.md`
- README links to pitch deck + YAML spec

## 🧩 Files / Structure
- `src/lib/logging.ts` (send logs to OO)
- `/docs/*` updates

## 🧪 Tests
- Visual: skeletons visible while loading
- Telemetry: records appear in OO with expected fields

## 🔗 References
- `docs/PITCH_DECK.md`
- `docs/architecture.md`
