---
title: "Interface: AgentStreamEvent"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / AgentStreamEvent

# Interface: AgentStreamEvent

Defined in: [src/execution/types.ts:240](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L240)

Agent stream event that wraps both UAP and UPP events.

During streaming execution, events from two sources are emitted:
- `uap`: High-level agent lifecycle events (step start/end, reasoning, etc.)
- `upp`: Low-level LLM stream events (text deltas, tool call deltas, etc.)

## Example

```typescript
const stream = agent.stream('Count to 5');

for await (const event of stream) {
  if (event.source === 'uap') {
    console.log(`Agent event: ${event.uap?.type}`);
  } else if (event.source === 'upp') {
    if (event.upp?.type === 'text_delta') {
      process.stdout.write(event.upp.delta.text ?? '');
    }
  }
}
```

## Properties

### source

> **source**: `"uap"` \| `"upp"`

Defined in: [src/execution/types.ts:242](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L242)

Event source: 'uap' for agent-level, 'upp' for LLM-level

***

### uap?

> `optional` **uap**: `object`

Defined in: [src/execution/types.ts:245](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L245)

Present when source === 'uap' - contains agent lifecycle event data

#### agentId

> **agentId**: `string`

The agent ID emitting this event

#### data

> **data**: `Record`\<`string`, `unknown`\>

Event-specific data payload

#### step

> **step**: `number`

The current step number (1-indexed)

#### type

> **type**: [`UAPEventType`](../type-aliases/uapeventtype.md)

The type of UAP event

***

### upp?

> `optional` **upp**: `StreamEvent`

Defined in: [src/execution/types.ts:257](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L257)

Present when source === 'upp' - contains LLM stream event
