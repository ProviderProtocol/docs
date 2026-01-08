---
title: "Type Alias: PlanStepStatus"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / PlanStepStatus

# Type Alias: PlanStepStatus

> **PlanStepStatus** = `"pending"` \| `"in_progress"` \| `"completed"` \| `"failed"`

Defined in: [src/state/types.ts:12](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L12)

Status of a plan step during agent execution.

Represents the lifecycle of an individual step within an execution plan:
- `pending`: Step has not yet started
- `in_progress`: Step is currently being executed
- `completed`: Step finished successfully
- `failed`: Step encountered an error and could not complete
