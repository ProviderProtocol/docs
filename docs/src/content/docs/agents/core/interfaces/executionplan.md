---
title: "Interface: ExecutionPlan"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ExecutionPlan

# Interface: ExecutionPlan

Defined in: [src/execution/types.ts:441](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L441)

Internal plan structure used by the plan execution strategy.

Tracks the list of plan steps and the current execution position.

## Properties

### currentStepIndex

> **currentStepIndex**: `number`

Defined in: [src/execution/types.ts:445](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L445)

Index of the currently executing step (0-indexed)

***

### steps

> **steps**: [`PlanStep`](planstep.md)[]

Defined in: [src/execution/types.ts:443](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L443)

Array of plan steps with dependencies and status
