---
title: "Interface: ImageHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageHandler

# Interface: ImageHandler\<TParams\>

Defined in: [src/types/provider.ts:222](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L222)

**`Internal`**

Image handler interface for providers.

Implemented by providers to enable image generation capabilities.

## Type Parameters

### TParams

`TParams` = `any`

Provider-specific parameter type

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/provider.ts:237](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L237)

**`Internal`**

Sets the parent provider reference.

#### Parameters

##### provider

[`ImageProvider`](../type-aliases/imageprovider.md)\<`TParams`\>

The parent provider

#### Returns

`void`

***

### bind()

> **bind**(`modelId`): [`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

Defined in: [src/types/provider.ts:229](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L229)

Binds a model ID to create an executable image model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

A bound image model ready for generation
