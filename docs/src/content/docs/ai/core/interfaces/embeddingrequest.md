---
title: "Interface: EmbeddingRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingRequest

# Interface: EmbeddingRequest\<TParams\>

Defined in: [src/types/provider.ts:335](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L335)

**`Internal`**

Request passed to provider's embed method.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/provider.ts:341](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L341)

Provider infrastructure config

***

### inputs

> **inputs**: [`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

Defined in: [src/types/provider.ts:337](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L337)

Inputs to embed

***

### inputType?

> `optional` **inputType**: `"document"` \| `"query"`

Defined in: [src/types/provider.ts:345](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L345)

Input type hint for provider-specific optimization

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/provider.ts:339](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L339)

Provider-specific parameters (passed through unchanged)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/provider.ts:343](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L343)

Abort signal for cancellation
