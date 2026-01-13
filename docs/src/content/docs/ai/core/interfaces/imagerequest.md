---
title: "Interface: ImageRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageRequest

# Interface: ImageRequest\<TParams\>

Defined in: [src/types/image.ts:224](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L224)

**`Internal`**

Request passed from image() core to providers for generation.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/image.ts:232](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L232)

Provider infrastructure config

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:229](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L229)

Provider-specific parameters (passed through unchanged)

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:226](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L226)

Generation prompt

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/image.ts:235](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/image.ts#L235)

Abort signal for cancellation
