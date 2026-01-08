---
title: "Interface: BoundImageModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundImageModel

# Interface: BoundImageModel\<TParams\>

Defined in: [src/types/provider.ts:308](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L308)

Bound image model interface.

Represents an image generation model bound to a specific model ID.

## Type Parameters

### TParams

`TParams` = `any`

Provider-specific parameter type

## Properties

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/provider.ts:310](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L310)

The model identifier

***

### provider

> `readonly` **provider**: [`ImageProvider`](../type-aliases/imageprovider.md)\<`TParams`\>

Defined in: [src/types/provider.ts:313](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/provider.ts#L313)

Reference to the parent provider
