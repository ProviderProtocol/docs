---
title: "Interface: EmbeddingRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingRequest

# Interface: EmbeddingRequest\<TParams\>

Defined in: [src/types/provider.ts:349](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L349)

**`Internal`**

Request passed to provider's embed method.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/provider.ts:355](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L355)

Provider infrastructure config

***

### inputs

> **inputs**: [`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

Defined in: [src/types/provider.ts:351](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L351)

Inputs to embed

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/provider.ts:353](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L353)

Provider-specific parameters (passed through unchanged)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/provider.ts:357](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L357)

Abort signal for cancellation
