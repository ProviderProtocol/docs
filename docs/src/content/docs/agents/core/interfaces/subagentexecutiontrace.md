---
title: "Interface: SubagentExecutionTrace"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / SubagentExecutionTrace

# Interface: SubagentExecutionTrace

Defined in: [src/state/types.ts:75](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L75)

Sub-agent execution trace for checkpoint persistence and observability.

Records the complete execution history of a sub-agent spawned by the parent agent,
including the task, timing, outcome, and all tool invocations. This enables
hierarchical agent debugging and audit trails.

## Remarks

Conforms to UAP specification Section 8.8 for sub-agent execution tracing.

## Example

```typescript
const trace: SubagentExecutionTrace = {
  subagentId: 'sub-abc123',
  subagentType: 'research-agent',
  parentToolCallId: 'call-xyz789',
  prompt: 'Find information about quantum computing',
  startTime: Date.now(),
  endTime: Date.now() + 5000,
  success: true,
  result: 'Quantum computing uses qubits...',
  toolExecutions: [
    { toolName: 'web_search', arguments: { query: 'quantum computing' }, result: '...' }
  ],
  usage: { inputTokens: 100, outputTokens: 200, totalTokens: 300 }
};
```

## See

[ToolExecutionTrace](toolexecutiontrace.md) for individual tool execution records

## Properties

### endTime

> **endTime**: `number`

Defined in: [src/state/types.ts:92](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L92)

Execution end timestamp in milliseconds since Unix epoch

***

### error?

> `optional` **error**: `string`

Defined in: [src/state/types.ts:101](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L101)

Error message describing what went wrong (present when `success` is false)

***

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/state/types.ts:83](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L83)

Tool call ID from the parent agent that spawned this sub-agent

***

### prompt

> **prompt**: `string`

Defined in: [src/state/types.ts:86](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L86)

The task or prompt given to the sub-agent

***

### result?

> `optional` **result**: `string`

Defined in: [src/state/types.ts:98](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L98)

The sub-agent's final response (present when `success` is true)

***

### startTime

> **startTime**: `number`

Defined in: [src/state/types.ts:89](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L89)

Execution start timestamp in milliseconds since Unix epoch

***

### subagentId

> **subagentId**: `string`

Defined in: [src/state/types.ts:77](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L77)

Unique identifier for this sub-agent instance

***

### subagentType

> **subagentType**: `string`

Defined in: [src/state/types.ts:80](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L80)

Type or name identifying the sub-agent's role or capabilities

***

### success

> **success**: `boolean`

Defined in: [src/state/types.ts:95](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L95)

Whether the sub-agent completed its task successfully

***

### toolExecutions?

> `optional` **toolExecutions**: [`ToolExecutionTrace`](toolexecutiontrace.md)[]

Defined in: [src/state/types.ts:104](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L104)

Ordered list of tool executions performed by the sub-agent

***

### usage?

> `optional` **usage**: `TokenUsage`

Defined in: [src/state/types.ts:107](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/state/types.ts#L107)

Token usage statistics for the sub-agent's LLM calls
