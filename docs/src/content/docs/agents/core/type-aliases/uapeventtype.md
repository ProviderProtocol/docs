---
title: "Type Alias: UAPEventType"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / UAPEventType

# Type Alias: UAPEventType

> **UAPEventType** = `"step_start"` \| `"step_end"` \| `"reasoning"` \| `"action"` \| `"observation"` \| `"plan_created"` \| `"plan_step_start"` \| `"plan_step_end"` \| `"subagent_start"` \| `"subagent_event"` \| `"subagent_end"`

Defined in: [src/execution/types.ts:205](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L205)

UAP-level event types emitted during agent streaming execution.

These events provide high-level visibility into the agent execution
lifecycle, complementing the lower-level UPP stream events.

## Remarks

- `step_start` / `step_end` - Bracket each execution step
- `reasoning` - Emitted during ReAct strategy reasoning phase
- `action` - Emitted when tool calls are made
- `observation` - Emitted when tool results are received
- `plan_*` - Emitted during Plan strategy planning and execution
- `subagent_*` - Emitted for hierarchical agent execution
