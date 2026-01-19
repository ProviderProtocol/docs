---
title: "Interface: EmbeddingHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingHandler

# Interface: EmbeddingHandler\<TParams\>

Defined in: [src/types/provider.ts:251](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L251)

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

Defined in: [src/types/provider.ts:253](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L253)

Supported input types for embeddings

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/provider.ts:269](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L269)

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

Defined in: [src/types/provider.ts:261](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L261)

Binds a model ID to create an executable embedding model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundEmbeddingModel`](boundembeddingmodel.md)\<`TParams`\>

A bound embedding model ready for use
