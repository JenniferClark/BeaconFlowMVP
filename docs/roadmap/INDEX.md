# 🗺️ BeaconFlow Roadmap Index

Track all planned work for the v2 Canonical YAML + AI migration.  
Use this page to open issues, link them, and mark progress.

---

## How to use this page

1) Open each file in `docs/roadmap/*.md`, **copy its content** into a new GitHub Issue.
2) After creating the issue, **copy its URL** and paste it next to the matching item below.
3) Check off items as you complete them.
4) Keep this page pinned in your repo (link from README).

> Tip: Once issues exist, replace `[open issue]` links with real issue URLs (e.g., `#23`).

---

## Milestones at a glance

| Milestone | Goal | Target |
|---|---|---|
| **M1** | AI schemas + provider facade; OO proxy | Nov 2025 |
| **M2** | YAML upload/validation | Dec 2025 |
| **M3** | AI infer/suggest + live preview | Jan 2026 |
| **M4** | Exporters + v1→v2 migration | Feb 2026 |
| **M5** | Profiles, polish, telemetry, docs | Apr 2026 |

---

## ✅ Master Checklist

### M1 — Foundations
- [ ] **PR1 – AI Provider Facade + v2 Schemas**  
  Docs seed: [`docs/roadmap/01-pr1-ai-facade-and-schemas.md`](./01-pr1-ai-facade-and-schemas.md) · Issue: [open issue]()
- [ ] **PR2 – OpenObserve Proxy (server-only)**  
  Docs seed: [`docs/roadmap/02-pr2-openobserve-proxy.md`](./02-pr2-openobserve-proxy.md) · Issue: [open issue]()

### M2 — YAML Canonical
- [ ] **PR3 – YAML Upload + Validation (v2 Canonical)**  
  Docs seed: [`docs/roadmap/03-pr3-yaml-upload-and-validation.md`](./03-pr3-yaml-upload-and-validation.md) · Issue: [open issue]()

### M3 — AI Suggest + Live Preview
- [ ] **PR4 – AI: Infer Field Map + Suggest Panels (Routes)**  
  Docs seed: [`docs/roadmap/04-pr4-ai-infer-and-suggest-routes.md`](./04-pr4-ai-infer-and-suggest-routes.md) · Issue: [open issue]()
- [ ] **PR5 – Live Preview (Sample vs Live toggle)**  
  Docs seed: [`docs/roadmap/05-pr5-live-preview-sample-vs-live.md`](./05-pr5-live-preview-sample-vs-live.md) · Issue: [open issue]()

### M4 — Export & Migrate
- [ ] **PR6 – Exporters (Enriched YAML, OO JSON, SQL Bundle)**  
  Docs seed: [`docs/roadmap/06-pr6-exporters-yaml-json-sql.md`](./06-pr6-exporters-yaml-json-sql.md) · Issue: [open issue]()
- [ ] **PR7 – Migration: v1 → v2 Converter**  
  Docs seed: [`docs/roadmap/07-pr7-migrate-v1-to-v2.md`](./07-pr7-migrate-v1-to-v2.md) · Issue: [open issue]()

### M3 (Parallelizable) — Multi-Provider AI
- [ ] **PR8 – xAI (Grok) Adapter + Provider Fallback**  
  Docs seed: [`docs/roadmap/08-pr8-xai-adapter-and-fallback.md`](./08-pr8-xai-adapter-and-fallback.md) · Issue: [open issue]()

### M5 — Profiles, Polish, Telemetry, Docs
- [ ] **PR9 – Connection Modal + Profiles**  
  Docs seed: [`docs/roadmap/09-pr9-connection-modal-and-profiles.md`](./09-pr9-connection-modal-and-profiles.md) · Issue: [open issue]()
- [ ] **PR10 – Polish, Telemetry, Docs**  
  Docs seed: [`docs/roadmap/10-pr10-polish-telemetry-docs.md`](./10-pr10-polish-telemetry-docs.md) · Issue: [open issue]()

---

## Labels & Milestones to use

**Labels:** `ai`, `api`, `ui/ux`, `openobserve`, `docs`, `roadmap`, `enhancement`, `bug`  
**Milestones:** `M1`, `M2`, `M3`, `M4`, `M5`

> Assign each issue to a milestone and apply 2–3 labels max.

---

## Quick links

- 📄 Pitch Deck: [`../PITCH_DECK.md`](../PITCH_DECK.md)
- 📘 YAML Spec v1 vs v2: [`../YAML_V1_VS_V2_SPEC.md`](../YAML_V1_VS_V2_SPEC.md)
- 🧠 AI Providers: [`../ai_providers.md`](../ai_providers.md)
- 🧩 Architecture: [`../architecture.md`](../architecture.md)
- 🔗 Integrations (OpenObserve): [`../integrations.md`](../integrations.md)

---

## Progress notes

Use this section to jot down decisions, blockers, or links to PRs.

- _2025-11-03:_ Decided on **v2 canonical YAML** + **AI migration** as product direction.
- _…_
