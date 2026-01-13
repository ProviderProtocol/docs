---
title: "Interface: EmbeddingHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingHandler

# Interface: EmbeddingHandler\<TParams\>

Defined in: [src/types/provider.ts:250](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/provider.ts#L250)

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

Defined in: [src/types/provider.ts:252](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/provider.ts#L252)

Supported input types for embeddings

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/provider.ts:268](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/provider.ts#L268)

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

Defined in: [src/types/provider.ts:260](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/provider.ts#L260)

Binds a model ID to create an executable embedding model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundEmbeddingModel`](boundembeddingmodel.md)\<`TParams`\>

A bound embedding model ready for use
