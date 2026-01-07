---
title: "Interface: StreamResult<TData>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / StreamResult

# Interface: StreamResult\<TData\>

Defined in: [src/types/stream.ts:128](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/stream.ts#L128)

Stream result - an async iterable that also provides the final turn.

Allows consuming streaming events while also awaiting the complete
Turn result after streaming finishes.

## Example

```typescript
const stream = instance.stream('Tell me a story');

// Consume streaming events
for await (const event of stream) {
  if (event.type === 'text_delta') {
    process.stdout.write(event.delta.text ?? '');
  }
}

// Get the complete turn after streaming
const turn = await stream.turn;
console.log('\n\nTokens used:', turn.usage.totalTokens);
```

## Extends

- `AsyncIterable`\<[`StreamEvent`](StreamEvent.md)\>

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Properties

### turn

> `readonly` **turn**: `Promise`\<[`Turn`](Turn.md)\<`TData`\>\>

Defined in: [src/types/stream.ts:133](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/stream.ts#L133)

Promise that resolves to the complete Turn after streaming finishes.

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`StreamEvent`](StreamEvent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`StreamEvent`](StreamEvent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### abort()

> **abort**(): `void`

Defined in: [src/types/stream.ts:138](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/stream.ts#L138)

Aborts the stream, stopping further events and cancelling the request.

#### Returns

`void`
