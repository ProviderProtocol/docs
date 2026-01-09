---
title: "Interface: EmbeddingHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingHandler

# Interface: EmbeddingHandler\<TParams\>

Defined in: [src/types/provider.ts:210](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L210)

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

Defined in: [src/types/provider.ts:212](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L212)

Supported input types for embeddings

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/provider.ts:228](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L228)

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

Defined in: [src/types/provider.ts:220](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L220)

Binds a model ID to create an executable embedding model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundEmbeddingModel`](boundembeddingmodel.md)\<`TParams`\>

A bound embedding model ready for use
