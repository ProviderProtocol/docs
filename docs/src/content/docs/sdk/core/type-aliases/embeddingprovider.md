---
title: "Type Alias: EmbeddingProvider<TParams, TOptions>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / EmbeddingProvider

# Type Alias: EmbeddingProvider\<TParams, TOptions\>

> **EmbeddingProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/Provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:365](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L365)

Provider with Embedding modality support.

Type alias for providers that support embedding generation.

## Type Declaration

### modalities

> `readonly` **modalities**: `object`

#### modalities.embedding

> **embedding**: [`EmbeddingHandler`](../interfaces/EmbeddingHandler.md)\<`TParams`\>

## Type Parameters

### TParams

`TParams` = `any`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type
