---
title: "Interface: ImageStreamResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageStreamResult

# Interface: ImageStreamResult

Defined in: [src/types/image.ts:134](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L134)

Async iterable stream with final result accessor.
Returned when stream() is called.

## Extends

- `AsyncIterable`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md)\>

## Properties

### result

> `readonly` **result**: `Promise`\<[`ImageResult`](imageresult.md)\>

Defined in: [src/types/image.ts:136](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L136)

Promise resolving to complete result after streaming

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### abort()

> **abort**(): `void`

Defined in: [src/types/image.ts:139](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L139)

Abort the generation

#### Returns

`void`
