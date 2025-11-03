# 🧾 BeaconFlow YAML Specification — v1 vs v2

This document formally defines the **BeaconFlow YAML schema evolution**,  
from the initial manual configuration format (**v1**) to the new AI-Smart YAML specification (**v2**).

---

## 🧩 Overview

| Version | Description | Target User |
|----------|--------------|--------------|
| **v1** | Manual configuration YAML defining explicit filters, groupings, and static dashboards. | Developers familiar with SQL / field names |
| **v2** | AI-Smart YAML describing *intent and insights* in plain language. AI automatically generates queries and charts. | Any user (PM, analyst, or engineer) |

---

## ⚙️ v1 Schema (Manual Configuration)

### **File location**
public/config/custom.yaml


### **Purpose**
Define hardcoded panels per app module.  
Each panel explicitly lists grouping and filtering logic.

### **Schema Definition**

| Key | Type | Required | Description |
|-----|------|-----------|-------------|
| `version` | string | ✅ | YAML version string (e.g. `"1.0"`) |
| `apps` | map | ✅ | Map of modules (e.g., `appointment`, `pharmacy`) |
| `apps.<module>.name` | string | ✅ | Display name for module |
| `apps.<module>.panels` | list | ✅ | Array of dashboard panels |
| `apps.<module>.panels[].id` | string | ✅ | Unique panel identifier |
| `apps.<module>.panels[].name` | string | ✅ | Human-friendly panel title |
| `apps.<module>.panels[].description` | string | ⚙️ | Panel explanation |
| `apps.<module>.panels[].intent` | string | ⚙️ | Brief purpose / goal text |
| `apps.<module>.panels[].fields.group_by` | string | ✅ | Expression for grouping (often SQL-style) |
| `apps.<module>.panels[].fields.filter` | string | ⚙️ | Boolean or SQL filter condition |

---

### **v1 Example**

```yaml
version: "1.0"

apps:
  appointment:
    name: "Appointment Module"
    panels:
      - id: "selected_appointment"
        name: "Selected Appointment View"
        description: "How many times each appointment was viewed"
        intent: "count views per appointment ID"
        fields:
          group_by: "payload.appointmentId"
          filter: "action = 'view'"

      - id: "time_slot_heatmap"
        name: "Time Slot Heatmap"
        description: "Which hours get most slot clicks"
        intent: "hourly click distribution"
        fields:
          group_by: "EXTRACT(HOUR FROM timestamp)"
          filter: "name = 'selectSlot'"

  pharmacy:
    name: "Pharmacy Module"
    panels:
      - id: "refill_by_drug"
        name: "Refill Requests by Drug"
        description: "Top drugs with refill requests"
        intent: "count refill requests per drug"
        fields:
          group_by: "payload.drugName"
          filter: "action = 'refill'"
```
---
### **v2 Example**

```yaml 
version: "1.0"
app: pharmacy-web
org: default
stream: beacon_events
intent: "Generate usage, error, and performance dashboards"
description: >
  This stream contains front-end beacons from a pharmacy website.
  Each event includes name, userId, page, duration, and error details.

fields:
  eventName: payload.name
  userId: payload.uid
  page: payload.page
  duration: payload.duration
  errorCode: payload.error.code
  timestamp: _timestamp

ai_panels:
  - goal: "Show hourly event volume trends"
    chartType: timeseries
    metrics:
      - "total events over time"
      - "unique users per hour"

  - goal: "Top user actions"
    chartType: bar
    metrics:
      - "most frequent event names"
      - "event frequency by page"

  - goal: "Error analysis"
    chartType: table
    metrics:
      - "errors by errorCode"
      - "errors by page"

  - goal: "Performance summary"
    chartType: scatter
    metrics:
      - "average duration per page"
      - "distribution of durations over time"

output_format: openobserve-json
```