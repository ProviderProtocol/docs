---
title: "Interface: ImageHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageHandler

# Interface: ImageHandler\<TParams\>

Defined in: [src/types/image.ts:335](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L335)

Image Handler interface for providers.

Implemented by providers to enable image generation capabilities.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/image.ts:351](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L351)

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

Defined in: [src/types/image.ts:342](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L342)

Binds a model ID to create an executable image model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

A bound image model ready for generation
