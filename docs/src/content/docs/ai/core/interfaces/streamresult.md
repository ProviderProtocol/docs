---
title: "Interface: StreamResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / StreamResult

# Interface: StreamResult\<TData\>

Defined in: [src/types/stream.ts:151](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/stream.ts#L151)

Stream result - an async iterable that also provides the final turn.

Allows consuming streaming events while also awaiting the complete
Turn result after streaming finishes.

## Example

```typescript
import { StreamEventType } from 'upp';

const stream = instance.stream('Tell me a story');

// Consume streaming events
for await (const event of stream) {
  if (event.type === StreamEventType.TextDelta) {
    process.stdout.write(event.delta.text ?? '');
  }
}

// Get the complete turn after streaming
const turn = await stream.turn;
console.log('\n\nTokens used:', turn.usage.totalTokens);
```

## Extends

- `AsyncIterable`\<[`StreamEvent`](streamevent.md)\>

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Properties

### turn

> `readonly` **turn**: `Promise`\<[`Turn`](turn.md)\<`TData`\>\>

Defined in: [src/types/stream.ts:157](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/stream.ts#L157)

Promise that resolves to the complete Turn after streaming finishes.
Rejects if the stream is aborted or terminated early.

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`StreamEvent`](streamevent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`StreamEvent`](streamevent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### abort()

> **abort**(): `void`

Defined in: [src/types/stream.ts:163](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/stream.ts#L163)

Aborts the stream, stopping further events and cancelling the request.
This will cause [StreamResult.turn](#turn) to reject.

#### Returns

`void`
