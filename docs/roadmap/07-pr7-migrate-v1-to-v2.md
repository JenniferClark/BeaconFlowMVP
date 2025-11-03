# PR7 – Migration: v1 → v2 Converter

**Labels:** docs, ai, roadmap  
**Milestone:** M4

## 🎯 Goal
Support legacy v1 YAML; auto-convert to v2 (AI-assisted for goals/metrics).

## ✅ Acceptance Criteria
- Zod for v1 YAML
- Converter maps each module to v2 `ai_panels` entries
- Converts `group_by`/`filter` to natural-language `goal` + `metrics`
- UI button: “Convert v1 YAML to AI-Smart (v2)”
- Converted v2 validates and flows through AI suggest-panels

## 🧩 Files / Structure
- `src/lib/yaml/legacy_v1.ts`
- `src/lib/yaml/convert_v1_to_v2.ts`
- UI: “Convert” action in YAML upload area

## 🧪 Tests
- Unit: your provided v1 sample converts cleanly
- Edge cases handled (missing filter/group_by)

## 🔗 References
- `docs/YAML_V1_VS_V2_SPEC.md`
