---
title: "Interface: EmbeddingRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingRequest

# Interface: EmbeddingRequest\<TParams\>

Defined in: [src/types/provider.ts:340](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L340)

**`Internal`**

Request passed to provider's embed method.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/provider.ts:346](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L346)

Provider infrastructure config

***

### inputs

> **inputs**: [`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

Defined in: [src/types/provider.ts:342](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L342)

Inputs to embed

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/provider.ts:344](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L344)

Provider-specific parameters (passed through unchanged)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/provider.ts:348](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L348)

Abort signal for cancellation
