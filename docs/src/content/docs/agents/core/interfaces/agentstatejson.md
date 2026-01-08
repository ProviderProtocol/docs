---
title: "Interface: AgentStateJSON"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / AgentStateJSON

# Interface: AgentStateJSON

Defined in: [src/state/types.ts:200](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L200)

JSON-serializable form of [AgentState](../classes/agentstate.md) for persistence.

Captures the complete state of an agent at a point in time, enabling
checkpointing, recovery, and debugging. The version field ensures
forward compatibility as the schema evolves.

## Remarks

The `version` field follows semantic versioning and must match
UAP\_VERSION for successful deserialization.

## See

[AgentStateInterface](agentstateinterface.md) for the runtime representation

## Properties

### id

> **id**: `string`

Defined in: [src/state/types.ts:205](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L205)

Unique identifier for this state snapshot

***

### messages

> **messages**: `MessageJSON`[]

Defined in: [src/state/types.ts:208](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L208)

Serialized conversation messages

***

### metadata

> **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/state/types.ts:214](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L214)

User-defined metadata attached to the state

***

### plan?

> `optional` **plan**: `PlanStepJSON`[]

Defined in: [src/state/types.ts:220](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L220)

Execution plan for Plan-strategy agents

***

### reasoning

> **reasoning**: `string`[]

Defined in: [src/state/types.ts:217](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L217)

Reasoning traces captured during ReAct-style execution

***

### step

> **step**: `number`

Defined in: [src/state/types.ts:211](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L211)

Current step number in the agent's execution

***

### subagentTraces?

> `optional` **subagentTraces**: [`SubagentExecutionTraceJSON`](subagentexecutiontracejson.md)[]

Defined in: [src/state/types.ts:223](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L223)

Sub-agent execution traces per UAP spec Section 8.8

***

### version

> **version**: `string`

Defined in: [src/state/types.ts:202](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L202)

UAP version string for schema compatibility checking
