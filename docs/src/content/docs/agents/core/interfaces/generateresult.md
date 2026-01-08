---
title: "Interface: GenerateResult"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / GenerateResult

# Interface: GenerateResult

Defined in: [src/execution/types.ts:28](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L28)

Result of agent generation containing the conversation turn and updated state.

This is the primary return type from agent execution methods. It combines
the standard UPP Turn (which contains the model's response and token usage)
with the UAP AgentState (which tracks the full execution context).

## Example

```typescript
const result = await agent.generate('What is the weather?');
console.log(result.turn.response.text); // Model's response
console.log(result.state.currentStep);  // Execution step count
```

## Properties

### state

> **state**: [`AgentState`](../classes/agentstate.md)

Defined in: [src/execution/types.ts:32](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L32)

New immutable state reflecting all changes from this generation

***

### turn

> **turn**: `Turn`

Defined in: [src/execution/types.ts:30](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L30)

Standard UPP Turn containing the model response, messages, and token usage
