# 🌟 BeaconFlow: AI-Powered OpenObserve Dashboards

> **Paste your beacon code → get a live OpenObserve dashboard in 60 seconds.**  
> BeaconFlow turns front-end analytics beacons into ready-to-use observability dashboards using OpenAI + xAI Grok intelligence.

---

## 🚀 Live Demo
- **App:** [https://beacon-flow-mvp.vercel.app](https://beacon-flow-mvp.vercel.app)
- **GitHub:** [https://github.com/JenniferClark/BeaconFlowMVP](https://github.com/JenniferClark/BeaconFlowMVP)

---

## 🧩 What It Does

- 🧠 Understands your beacon code (auto field mapping)
- ⚙️ Builds dashboards automatically (AI-written SQL + charts)
- 🧾 Supports YAML-as-Code (import/export configuration)
- 🔄 Connects to OpenObserve securely (query live or sample data)
- 🤖 Multi-AI Engine (OpenAI GPT-4o + xAI Grok 4 Fast adapters)

---

## ⚙️ Architecture Overview

```mermaid
flowchart LR
  U[User] --> UI[Next.js Frontend]
  UI -->|/api/ai/*| AIH[AI Route Handlers]
  UI -->|/api/oo/*| OOH[OpenObserve Proxy]
  AIH --> AIF[AI Provider Facade]
  AIF -->|OpenAI| OA
  AIF -->|xAI Grok| XAI
  OOH --> OO[(OpenObserve Cloud / Self-hosted)]
