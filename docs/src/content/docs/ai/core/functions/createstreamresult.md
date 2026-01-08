---
title: "Function: createStreamResult()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / createStreamResult

# Function: createStreamResult()

> **createStreamResult**\<`TData`\>(`generator`, `turnPromise`, `abortController`): [`StreamResult`](../interfaces/streamresult.md)\<`TData`\>

Defined in: [src/types/stream.ts:160](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/stream.ts#L160)

Creates a StreamResult from an async generator and completion promise.

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Parameters

### generator

`AsyncGenerator`\<[`StreamEvent`](../interfaces/streamevent.md), `void`, `unknown`\>

Async generator that yields stream events

### turnPromise

`Promise`\<[`Turn`](../interfaces/turn.md)\<`TData`\>\>

Promise that resolves to the complete Turn

### abortController

`AbortController`

Controller for aborting the stream

## Returns

[`StreamResult`](../interfaces/streamresult.md)\<`TData`\>

A StreamResult that can be iterated and awaited

## Example

```typescript
const abortController = new AbortController();
const stream = createStreamResult(
  eventGenerator(),
  turnPromise,
  abortController
);
```
