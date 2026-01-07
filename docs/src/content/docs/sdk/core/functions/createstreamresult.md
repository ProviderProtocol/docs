---
title: "Function: createStreamResult()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / createStreamResult

# Function: createStreamResult()

> **createStreamResult**\<`TData`\>(`generator`, `turnPromise`, `abortController`): [`StreamResult`](../interfaces/StreamResult.md)\<`TData`\>

Defined in: [src/types/stream.ts:160](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/stream.ts#L160)

Creates a StreamResult from an async generator and completion promise.

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Parameters

### generator

`AsyncGenerator`\<[`StreamEvent`](../interfaces/StreamEvent.md), `void`, `unknown`\>

Async generator that yields stream events

### turnPromise

`Promise`\<[`Turn`](../interfaces/Turn.md)\<`TData`\>\>

Promise that resolves to the complete Turn

### abortController

`AbortController`

Controller for aborting the stream

## Returns

[`StreamResult`](../interfaces/StreamResult.md)\<`TData`\>

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
