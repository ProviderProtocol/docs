---
title: "Interface: ImageEditRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageEditRequest

# Interface: ImageEditRequest\<TParams\>

Defined in: [src/types/image.ts:240](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L240)

**`Internal`**

Request passed to providers for edit operations.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/image.ts:254](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L254)

Provider infrastructure config

***

### image

> **image**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:242](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L242)

Base image to edit

***

### mask?

> `optional` **mask**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:245](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L245)

Edit mask

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:251](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L251)

Provider-specific parameters

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:248](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L248)

Edit instruction prompt

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/image.ts:257](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L257)

Abort signal for cancellation
