# PR3 – YAML Upload + Validation (v2 Canonical)

**Labels:** ui/ux, docs, roadmap  
**Milestone:** M2

## 🎯 Goal
Enable users to upload AI-Smart YAML (v2), validate it, and store in wizard state.

## ✅ Acceptance Criteria
- Upload control accepts `.yaml/.yml`
- YAML parsed client-side (js-yaml), validated by Zod (v2 schema)
- Parse errors show line/column with clear message
- Valid YAML displayed as a parsed summary (app/org/stream/goals)
- Wizard state persists the parsed YAML

## 🧩 Files / Structure
- `src/components/input/YamlUpload.tsx`
- `src/lib/yaml/spec.ts`
- `src/lib/state/wizard.ts` (Zustand/Context)

## 🧪 Tests
- Unit: invalid YAML → helpful error
- E2E: upload → state set → next step enabled

## 🔗 References
- `docs/AI_SMART_YAML_SPEC.md`
