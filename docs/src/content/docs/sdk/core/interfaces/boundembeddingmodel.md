---
title: "Interface: BoundEmbeddingModel<TParams>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / BoundEmbeddingModel

# Interface: BoundEmbeddingModel\<TParams\>

Defined in: [src/types/provider.ts:265](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L265)

Bound embedding model interface.

Represents an embedding model bound to a specific model ID,
ready to generate embeddings.

## Type Parameters

### TParams

`TParams` = `any`

Provider-specific parameter type

## Properties

### dimensions

> `readonly` **dimensions**: `number`

Defined in: [src/types/provider.ts:279](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L279)

Output embedding dimensions

***

### maxBatchSize

> `readonly` **maxBatchSize**: `number`

Defined in: [src/types/provider.ts:273](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L273)

Maximum number of inputs per batch request

***

### maxInputLength

> `readonly` **maxInputLength**: `number`

Defined in: [src/types/provider.ts:276](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L276)

Maximum length of input text in tokens

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/provider.ts:267](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L267)

The model identifier

***

### provider

> `readonly` **provider**: [`EmbeddingProvider`](../type-aliases/EmbeddingProvider.md)\<`TParams`\>

Defined in: [src/types/provider.ts:270](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L270)

Reference to the parent provider
