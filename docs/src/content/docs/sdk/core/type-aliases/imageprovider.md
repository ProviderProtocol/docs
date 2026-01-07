---
title: "Type Alias: ImageProvider<TParams, TOptions>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ImageProvider

# Type Alias: ImageProvider\<TParams, TOptions\>

> **ImageProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/Provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:378](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L378)

Provider with Image modality support.

Type alias for providers that support image generation.

## Type Declaration

### modalities

> `readonly` **modalities**: `object`

#### modalities.image

> **image**: [`ImageHandler`](../interfaces/ImageHandler.md)\<`TParams`\>

## Type Parameters

### TParams

`TParams` = `any`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type
