---
title: "Interface: EmbeddingHandler<TParams>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / EmbeddingHandler

# Interface: EmbeddingHandler\<TParams\>

Defined in: [src/types/provider.ts:192](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L192)

**`Internal`**

Embedding handler interface for providers.

Implemented by providers to enable embedding capabilities.

## Type Parameters

### TParams

`TParams` = `any`

Provider-specific parameter type

## Properties

### supportedInputs

> `readonly` **supportedInputs**: (`"text"` \| `"image"`)[]

Defined in: [src/types/provider.ts:194](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L194)

Supported input types for embeddings

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/provider.ts:210](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L210)

**`Internal`**

Sets the parent provider reference.

#### Parameters

##### provider

[`EmbeddingProvider`](../type-aliases/EmbeddingProvider.md)\<`TParams`\>

The parent provider

#### Returns

`void`

***

### bind()

> **bind**(`modelId`): [`BoundEmbeddingModel`](BoundEmbeddingModel.md)\<`TParams`\>

Defined in: [src/types/provider.ts:202](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L202)

Binds a model ID to create an executable embedding model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundEmbeddingModel`](BoundEmbeddingModel.md)\<`TParams`\>

A bound embedding model ready for use
