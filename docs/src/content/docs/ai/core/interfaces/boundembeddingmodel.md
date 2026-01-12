---
title: "Interface: BoundEmbeddingModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundEmbeddingModel

# Interface: BoundEmbeddingModel\<TParams\>

Defined in: [src/types/provider.ts:311](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L311)

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

Defined in: [src/types/provider.ts:325](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L325)

Output embedding dimensions

***

### maxBatchSize

> `readonly` **maxBatchSize**: `number`

Defined in: [src/types/provider.ts:319](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L319)

Maximum number of inputs per batch request

***

### maxInputLength

> `readonly` **maxInputLength**: `number`

Defined in: [src/types/provider.ts:322](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L322)

Maximum length of input text in tokens

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/provider.ts:313](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L313)

The model identifier

***

### provider

> `readonly` **provider**: [`EmbeddingProvider`](../type-aliases/embeddingprovider.md)\<`TParams`\>

Defined in: [src/types/provider.ts:316](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L316)

Reference to the parent provider

## Methods

### embed()

> **embed**(`request`): `Promise`\<[`EmbeddingResponse`](embeddingresponse.md)\>

Defined in: [src/types/provider.ts:333](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L333)

Execute embedding request.

#### Parameters

##### request

[`EmbeddingRequest`](embeddingrequest.md)\<`TParams`\>

The embedding request

#### Returns

`Promise`\<[`EmbeddingResponse`](embeddingresponse.md)\>

Promise resolving to embedding response
