---
title: "Interface: ExecutionPlan"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ExecutionPlan

# Interface: ExecutionPlan

Defined in: [src/execution/types.ts:441](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L441)

Internal plan structure used by the plan execution strategy.

Tracks the list of plan steps and the current execution position.

## Properties

### currentStepIndex

> **currentStepIndex**: `number`

Defined in: [src/execution/types.ts:445](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L445)

Index of the currently executing step (0-indexed)

***

### steps

> **steps**: [`PlanStep`](planstep.md)[]

Defined in: [src/execution/types.ts:443](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L443)

Array of plan steps with dependencies and status
