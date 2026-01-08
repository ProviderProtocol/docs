---
title: "Type Alias: PlanStepStatus"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / PlanStepStatus

# Type Alias: PlanStepStatus

> **PlanStepStatus** = `"pending"` \| `"in_progress"` \| `"completed"` \| `"failed"`

Defined in: [src/state/types.ts:12](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/state/types.ts#L12)

Status of a plan step during agent execution.

Represents the lifecycle of an individual step within an execution plan:
- `pending`: Step has not yet started
- `in_progress`: Step is currently being executed
- `completed`: Step finished successfully
- `failed`: Step encountered an error and could not complete
