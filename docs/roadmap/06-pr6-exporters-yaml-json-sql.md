# PR6 – Exporters (Enriched YAML, OO JSON, SQL Bundle)

**Labels:** ui/ux, openobserve, roadmap  
**Milestone:** M4

## 🎯 Goal
Export artifacts for reuse/import: enriched YAML (with AI SQL), OO dashboard JSON, and SQL bundle.

## ✅ Acceptance Criteria
- Export menu with 3 downloads
- Deterministic filenames:
    - `beaconflow-{app}-enriched.yaml`
    - `beaconflow-{app}-bundle.sql`
    - `beaconflow-{app}-oo-dashboard.json`

## 🧩 Files / Structure
- `src/lib/exporters/yaml.ts`
- `src/lib/exporters/sql.ts`
- `src/lib/exporters/openobserve.ts`

## 🧪 Tests
- Unit: exporter outputs match expected structures/content

## 🔗 References
- `docs/integrations.md`
- `docs/AI_SMART_YAML_SPEC.md`
