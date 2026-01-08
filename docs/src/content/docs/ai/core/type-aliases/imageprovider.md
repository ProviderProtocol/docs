---
title: "Type Alias: ImageProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageProvider

# Type Alias: ImageProvider\<TParams, TOptions\>

> **ImageProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:378](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/provider.ts#L378)

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
