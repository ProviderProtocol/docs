---
title: "Interface: EmbeddingStream"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingStream

# Interface: EmbeddingStream

Defined in: [src/types/embedding.ts:135](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/embedding.ts#L135)

Async iterable stream with final result accessor.
Returned when embed() is called with { chunked: true }.

## Extends

- `AsyncIterable`\<[`EmbeddingProgress`](embeddingprogress.md)\>

## Properties

### result

> `readonly` **result**: `Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

Defined in: [src/types/embedding.ts:137](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/embedding.ts#L137)

Promise resolving to complete result after iteration

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`EmbeddingProgress`](embeddingprogress.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`EmbeddingProgress`](embeddingprogress.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### abort()

> **abort**(): `void`

Defined in: [src/types/embedding.ts:140](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/embedding.ts#L140)

Abort the operation

#### Returns

`void`
