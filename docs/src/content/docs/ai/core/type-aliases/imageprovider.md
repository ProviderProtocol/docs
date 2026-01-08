---
title: "Type Alias: ImageProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageProvider

# Type Alias: ImageProvider\<TParams, TOptions\>

> **ImageProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:396](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/provider.ts#L396)

Provider with Image modality support.

Type alias for providers that support image generation.

## Type Declaration

### modalities

> `readonly` **modalities**: `object`

#### modalities.image

> **image**: [`ImageHandler`](../interfaces/imagehandler.md)\<`TParams`\>

## Type Parameters

### TParams

`TParams` = `any`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type
