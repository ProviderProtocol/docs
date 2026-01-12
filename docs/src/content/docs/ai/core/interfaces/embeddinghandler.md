---
title: "Interface: EmbeddingHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingHandler

# Interface: EmbeddingHandler\<TParams\>

Defined in: [src/types/provider.ts:241](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L241)

**`Internal`**

Embedding handler interface for providers.

Implemented by providers to enable embedding capabilities.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### supportedInputs

> `readonly` **supportedInputs**: (`"text"` \| `"image"`)[]

Defined in: [src/types/provider.ts:243](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L243)

Supported input types for embeddings

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/provider.ts:259](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L259)

**`Internal`**

Sets the parent provider reference.

#### Parameters

##### provider

[`EmbeddingProvider`](../type-aliases/embeddingprovider.md)\<`TParams`\>

The parent provider

#### Returns

`void`

***

### bind()

> **bind**(`modelId`): [`BoundEmbeddingModel`](boundembeddingmodel.md)\<`TParams`\>

Defined in: [src/types/provider.ts:251](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/provider.ts#L251)

Binds a model ID to create an executable embedding model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundEmbeddingModel`](boundembeddingmodel.md)\<`TParams`\>

A bound embedding model ready for use
