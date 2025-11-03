# 🧩 BeaconFlow Architecture Overview

BeaconFlow converts front-end beacon code into ready-to-use **OpenObserve dashboards**.  
The system is built to stay modular and AI-provider-agnostic.

---

## System Diagram

```mermaid
flowchart LR
  U[User] --> UI[Next.js UI (React Query)]
  UI -->|POST /api/ai/suggest-panels| AIH[Next Route Handler]
  UI -->|POST /api/ai/infer-fieldmap| AIH
  UI -->|POST /api/ai/explain-sql| AIH

  subgraph Server (Vercel)
    AIH --> AIF[AI Provider Facade]
    AIF -->|provider=openai| OA[OpenAI Adapter]
    AIF -->|provider=xai| XAI[Grok Adapter]
    UI -->|/api/oo/*| OOH[OO Proxy]
  end

  OOH --> OO[(OpenObserve Cloud / Self-hosted)]
  OA --> LLM1[(OpenAI GPT-4o-mini)]
  XAI --> LLM2[(xAI Grok 4 / 4 Fast)]
