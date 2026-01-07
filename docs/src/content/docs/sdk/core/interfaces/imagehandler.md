---
title: "Interface: ImageHandler<TParams>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ImageHandler

# Interface: ImageHandler\<TParams\>

Defined in: [src/types/provider.ts:222](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L222)

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

Defined in: [src/types/provider.ts:237](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L237)

**`Internal`**

Sets the parent provider reference.

#### Parameters

##### provider

[`ImageProvider`](../type-aliases/ImageProvider.md)\<`TParams`\>

The parent provider

#### Returns

`void`

***

### bind()

> **bind**(`modelId`): [`BoundImageModel`](BoundImageModel.md)\<`TParams`\>

Defined in: [src/types/provider.ts:229](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L229)

Binds a model ID to create an executable image model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundImageModel`](BoundImageModel.md)\<`TParams`\>

A bound image model ready for generation
