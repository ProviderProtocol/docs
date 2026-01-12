---
title: "Interface: ImageHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageHandler

# Interface: ImageHandler\<TParams\>

Defined in: [src/types/image.ts:337](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L337)

Image Handler interface for providers.

Implemented by providers to enable image generation capabilities.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/image.ts:353](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L353)

**`Internal`**

Sets the parent provider reference.
Called by createProvider() after the provider is constructed.

#### Parameters

##### provider

[`ImageProvider`](../type-aliases/imageprovider.md)\<`TParams`\>

The parent provider

#### Returns

`void`

***

### bind()

> **bind**(`modelId`): [`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

Defined in: [src/types/image.ts:344](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L344)

Binds a model ID to create an executable image model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

A bound image model ready for generation
