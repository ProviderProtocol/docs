---
title: "Interface: ImageRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageRequest

# Interface: ImageRequest\<TParams\>

Defined in: [src/types/image.ts:233](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L233)

**`Internal`**

Request passed from image() core to providers for generation.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/image.ts:241](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L241)

Provider infrastructure config

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:238](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L238)

Provider-specific parameters (passed through unchanged)

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:235](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L235)

Generation prompt

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/image.ts:244](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L244)

Abort signal for cancellation
