---
title: "Interface: ImageRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageRequest

# Interface: ImageRequest\<TParams\>

Defined in: [src/types/image.ts:222](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L222)

**`Internal`**

Request passed from image() core to providers for generation.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/image.ts:230](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L230)

Provider infrastructure config

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:227](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L227)

Provider-specific parameters (passed through unchanged)

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:224](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L224)

Generation prompt

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/image.ts:233](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L233)

Abort signal for cancellation
