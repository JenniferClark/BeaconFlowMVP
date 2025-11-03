# PR5 – Live Preview (Sample vs Live toggle)

**Labels:** ui/ux, openobserve, roadmap  
**Milestone:** M3

## 🎯 Goal
Render AI-generated panels with real OO data, with a fallback to sample data.

## ✅ Acceptance Criteria
- `useOOQuery(sql)` hook with React Query
- PanelRenderer supports `timeseries`, `bar`, `table`, `scatter`
- Toggle: Sample vs Live; failed `ping` auto-falls back to Sample
- “Explain” icon calls `/api/ai/explain-sql` (stub OK)

## 🧩 Files / Structure
- `src/lib/queries.ts`
- `src/components/preview/PanelRenderer.tsx`
- `src/lib/state/ui.ts` (useSampleData)

## 🧪 Tests
- Snapshot: renders titles and chart shells
- Integration: one successful SQL path; fallback banner visible on failure

## 🔗 References
- `docs/architecture.md`
