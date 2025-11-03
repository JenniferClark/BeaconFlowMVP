# PR2 – OpenObserve Proxy (server-only)

**Labels:** openobserve, api, roadmap  
**Milestone:** M1

## 🎯 Goal
Provide secure server-side proxies to call OO SQL/search without exposing tokens.

## ✅ Acceptance Criteria
- `GET /api/oo/ping` returns `{ ok: true }` (tiny health query)
- `POST /api/oo/query` accepts `{ sql }` and returns OO JSON (rows/columns)
- Server-only client with `Authorization: Bearer ${OO_TOKEN}`
- Friendly error surfaces for 4xx/5xx with actionable message

## 🧩 Files / Structure
- `src/app/api/oo/ping/route.ts`
- `src/app/api/oo/query/route.ts`
- `src/lib/openobserve.ts`

## 🧪 Tests
- Integration: headers contain Bearer token
- Unit: propagates OO error body message

## 🔗 References
- `docs/integrations.md`
