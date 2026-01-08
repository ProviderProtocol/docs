---
title: "Interface: ImageHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageHandler

# Interface: ImageHandler\<TParams\>

Defined in: [src/types/provider.ts:240](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L240)

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

Defined in: [src/types/provider.ts:255](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L255)

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

Defined in: [src/types/provider.ts:247](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L247)

Binds a model ID to create an executable image model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

A bound image model ready for generation
