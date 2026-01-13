---
title: "Function: createStreamResult()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / createStreamResult

# Function: createStreamResult()

> **createStreamResult**\<`TData`\>(`generator`, `turnPromiseOrFactory`, `abortController`): [`StreamResult`](../interfaces/streamresult.md)\<`TData`\>

Defined in: [src/types/stream.ts:185](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/stream.ts#L185)

Creates a StreamResult from an async generator and completion promise.

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Parameters

### generator

`AsyncGenerator`\<[`StreamEvent`](../interfaces/streamevent.md), `void`, `unknown`\>

Async generator that yields stream events

### turnPromiseOrFactory

Promise or factory that resolves to the complete Turn

`Promise`\<[`Turn`](../interfaces/turn.md)\<`TData`\>\> | () => `Promise`\<[`Turn`](../interfaces/turn.md)\<`TData`\>\>

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
