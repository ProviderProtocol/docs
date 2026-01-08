---
title: "Interface: ExecutionPlan"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / ExecutionPlan

# Interface: ExecutionPlan

Defined in: [src/execution/types.ts:441](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L441)

Internal plan structure used by the plan execution strategy.

Tracks the list of plan steps and the current execution position.

## Properties

### currentStepIndex

> **currentStepIndex**: `number`

Defined in: [src/execution/types.ts:445](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L445)

Index of the currently executing step (0-indexed)

***

### steps

> **steps**: [`PlanStep`](PlanStep.md)[]

Defined in: [src/execution/types.ts:443](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L443)

Array of plan steps with dependencies and status
