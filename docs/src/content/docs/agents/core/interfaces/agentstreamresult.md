---
title: "Interface: AgentStreamResult"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / AgentStreamResult

# Interface: AgentStreamResult

Defined in: [src/execution/types.ts:284](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L284)

Streaming result from agent execution providing async iteration and final result access.

AgentStreamResult implements the async iterator protocol for consuming
stream events, provides a promise for the final result, and includes
an abort method for cancellation.

## Example

```typescript
const stream = agent.stream('What is 2+2?');

// Consume events as they arrive
for await (const event of stream) {
  handleEvent(event);
}

// Get the final result after stream completes
const result = await stream.result;
console.log(result.turn.response.text);

// Or abort early
stream.abort();
```

## Properties

### result

> **result**: `Promise`\<[`GenerateResult`](generateresult.md)\>

Defined in: [src/execution/types.ts:288](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L288)

Promise that resolves to the final result after stream completes

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`AgentStreamEvent`](agentstreamevent.md)\>

Defined in: [src/execution/types.ts:286](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L286)

Async iterator for consuming stream events

#### Returns

`AsyncIterator`\<[`AgentStreamEvent`](agentstreamevent.md)\>

***

### abort()

> **abort**(): `void`

Defined in: [src/execution/types.ts:290](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L290)

Abort the stream and cancel execution

#### Returns

`void`
