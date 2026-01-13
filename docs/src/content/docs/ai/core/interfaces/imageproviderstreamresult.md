---
title: "Interface: ImageProviderStreamResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageProviderStreamResult

# Interface: ImageProviderStreamResult

Defined in: [src/types/image.ts:282](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L282)

**`Internal`**

Raw provider stream result.
An async iterable of ImageStreamEvent with a response promise.

## Extends

- `AsyncIterable`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md)\>

## Properties

### response

> `readonly` **response**: `Promise`\<[`ImageResponse`](imageresponse.md)\>

Defined in: [src/types/image.ts:284](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L284)

Promise resolving to the complete response

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`
