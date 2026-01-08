---
title: "Interface: BoundEmbeddingModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundEmbeddingModel

# Interface: BoundEmbeddingModel\<TParams\>

Defined in: [src/types/provider.ts:265](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L265)

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

Defined in: [src/types/provider.ts:279](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L279)

Output embedding dimensions

***

### maxBatchSize

> `readonly` **maxBatchSize**: `number`

Defined in: [src/types/provider.ts:273](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L273)

Maximum number of inputs per batch request

***

### maxInputLength

> `readonly` **maxInputLength**: `number`

Defined in: [src/types/provider.ts:276](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L276)

Maximum length of input text in tokens

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/provider.ts:267](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L267)

The model identifier

***

### provider

> `readonly` **provider**: [`EmbeddingProvider`](../type-aliases/embeddingprovider.md)\<`TParams`\>

Defined in: [src/types/provider.ts:270](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L270)

Reference to the parent provider
