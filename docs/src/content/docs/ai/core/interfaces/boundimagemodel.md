---
title: "Interface: BoundImageModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundImageModel

# Interface: BoundImageModel\<TParams\>

Defined in: [src/types/provider.ts:290](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L290)

Bound image model interface.

Represents an image generation model bound to a specific model ID.

## Type Parameters

### TParams

`TParams` = `any`

Provider-specific parameter type

## Properties

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/provider.ts:292](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L292)

The model identifier

***

### provider

> `readonly` **provider**: [`ImageProvider`](../type-aliases/imageprovider.md)\<`TParams`\>

Defined in: [src/types/provider.ts:295](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L295)

Reference to the parent provider
