# PR9 – Connection Modal + Profiles

**Labels:** ui/ux, openobserve, roadmap  
**Milestone:** M5

## 🎯 Goal
Allow users to save multiple non-secret OO profiles (baseUrl/org/stream) and switch quickly.

## ✅ Acceptance Criteria
- Connection modal with fields + “Test connection” (calls `/api/oo/ping`)
- Profiles persisted (localStorage)
- Profile switch updates preview queries seamlessly

## 🧩 Files / Structure
- `src/components/ConnectionModal.tsx`
- `src/lib/state/profiles.ts`

## 🧪 Tests
- Unit: profile CRUD
- E2E: switching profile affects live preview

## 🔗 References
- `docs/integrations.md`
