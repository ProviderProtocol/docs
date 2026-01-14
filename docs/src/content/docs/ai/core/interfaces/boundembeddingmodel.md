---
title: "Interface: BoundEmbeddingModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundEmbeddingModel

# Interface: BoundEmbeddingModel\<TParams\>

Defined in: [src/types/provider.ts:306](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L306)

Bound embedding model interface.

Represents an embedding model bound to a specific model ID,
ready to generate embeddings.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### dimensions

> `readonly` **dimensions**: `number`

Defined in: [src/types/provider.ts:320](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L320)

Output embedding dimensions

***

### maxBatchSize

> `readonly` **maxBatchSize**: `number`

Defined in: [src/types/provider.ts:314](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L314)

Maximum number of inputs per batch request

***

### maxInputLength

> `readonly` **maxInputLength**: `number`

Defined in: [src/types/provider.ts:317](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L317)

Maximum length of input text in tokens

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/provider.ts:308](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L308)

The model identifier

***

### provider

> `readonly` **provider**: [`EmbeddingProvider`](../type-aliases/embeddingprovider.md)\<`TParams`\>

Defined in: [src/types/provider.ts:311](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L311)

Reference to the parent provider

## Methods

### embed()

> **embed**(`request`): `Promise`\<[`EmbeddingResponse`](embeddingresponse.md)\>

Defined in: [src/types/provider.ts:328](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L328)

Execute embedding request.

#### Parameters

##### request

[`EmbeddingRequest`](embeddingrequest.md)\<`TParams`\>

The embedding request

#### Returns

`Promise`\<[`EmbeddingResponse`](embeddingresponse.md)\>

Promise resolving to embedding response
