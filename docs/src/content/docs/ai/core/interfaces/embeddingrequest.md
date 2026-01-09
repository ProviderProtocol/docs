---
title: "Interface: EmbeddingRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingRequest

# Interface: EmbeddingRequest\<TParams\>

Defined in: [src/types/provider.ts:313](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L313)

**`Internal`**

Request passed to provider's embed method.

## Type Parameters

### TParams

`TParams` = `any`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/provider.ts:319](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L319)

Provider infrastructure config

***

### inputs

> **inputs**: [`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

Defined in: [src/types/provider.ts:315](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L315)

Inputs to embed

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/provider.ts:317](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L317)

Provider-specific parameters (passed through unchanged)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/provider.ts:321](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L321)

Abort signal for cancellation
