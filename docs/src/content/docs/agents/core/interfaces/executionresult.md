---
title: "Interface: ExecutionResult"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ExecutionResult

# Interface: ExecutionResult

Defined in: [src/execution/types.ts:184](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L184)

Result from an execution strategy containing the turn and final state.

This is the internal result type used by execution strategies.
It is identical to GenerateResult but named separately for clarity
in the strategy interface.

## Properties

### state

> **state**: [`AgentState`](../classes/agentstate.md)

Defined in: [src/execution/types.ts:188](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L188)

New immutable state after execution completes

***

### turn

> **turn**: `Turn`

Defined in: [src/execution/types.ts:186](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L186)

The complete UPP Turn from the final LLM response
