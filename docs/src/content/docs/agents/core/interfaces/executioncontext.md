---
title: "Interface: ExecutionContext"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ExecutionContext

# Interface: ExecutionContext

Defined in: [src/execution/types.ts:156](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L156)

Context passed to execution strategies containing all resources needed for execution.

The ExecutionContext bundles together the agent reference, LLM instance,
input message, current state, tools, and hooks. Execution strategies use
this context to perform their work without needing direct access to the
Agent instance.

## Remarks

The context is immutable - strategies should use `state.with*()` methods
to create new state snapshots rather than mutating the provided state.

## Example

```typescript
// ExecutionContext is created internally by the Agent
const context: ExecutionContext = {
  agent: { id: 'agent-123', system: 'You are helpful.' },
  llm: llmInstance,
  input: new UserMessage('Hello'),
  state: AgentState.create(),
  tools: [weatherTool, searchTool],
  strategy: { maxIterations: 5 },
};

const result = await strategy.execute(context);
```

## Properties

### agent

> **agent**: [`AgentRef`](agentref.md)

Defined in: [src/execution/types.ts:158](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L158)

The agent being executed (minimal reference)

***

### checkpoints?

> `optional` **checkpoints**: [`CheckpointStore`](checkpointstore.md)

Defined in: [src/execution/types.ts:172](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L172)

Checkpoint store for state persistence (optional)

***

### input

> **input**: `Message`

Defined in: [src/execution/types.ts:162](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L162)

The user input message to process

***

### llm

> **llm**: `LLMInstance`

Defined in: [src/execution/types.ts:160](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L160)

The bound LLM instance configured for this agent

***

### sessionId?

> `optional` **sessionId**: `string`

Defined in: [src/execution/types.ts:174](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L174)

Session ID for checkpointing continuity

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/execution/types.ts:170](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L170)

Abort signal for cancellation support

***

### state

> **state**: [`AgentState`](../classes/agentstate.md)

Defined in: [src/execution/types.ts:164](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L164)

Current immutable state snapshot

***

### strategy

> **strategy**: [`AgentStrategy`](agentstrategy.md)

Defined in: [src/execution/types.ts:168](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L168)

Agent lifecycle hooks for observability and control

***

### tools

> **tools**: `Tool`\<`unknown`, `unknown`\>[]

Defined in: [src/execution/types.ts:166](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L166)

Resolved tools available for this execution
