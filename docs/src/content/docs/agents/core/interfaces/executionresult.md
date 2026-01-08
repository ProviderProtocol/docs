---
title: "Interface: ExecutionResult"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / ExecutionResult

# Interface: ExecutionResult

Defined in: [src/execution/types.ts:184](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L184)

Result from an execution strategy containing the turn and final state.

This is the internal result type used by execution strategies.
It is identical to GenerateResult but named separately for clarity
in the strategy interface.

## Properties

### state

> **state**: [`AgentState`](../classes/AgentState.md)

Defined in: [src/execution/types.ts:188](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L188)

New immutable state after execution completes

***

### turn

> **turn**: `Turn`

Defined in: [src/execution/types.ts:186](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L186)

The complete UPP Turn from the final LLM response
