---
title: "Interface: ImageCapabilities"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageCapabilities

# Interface: ImageCapabilities

Defined in: [src/types/image.ts:145](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L145)

Image generation capabilities.

## Properties

### edit

> **edit**: `boolean`

Defined in: [src/types/image.ts:153](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L153)

Supports image editing/inpainting

***

### generate

> **generate**: `boolean`

Defined in: [src/types/image.ts:147](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L147)

Supports text-to-image generation

***

### maxImages?

> `optional` **maxImages**: `number`

Defined in: [src/types/image.ts:156](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L156)

Maximum images per request (if known)

***

### streaming

> **streaming**: `boolean`

Defined in: [src/types/image.ts:150](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L150)

Supports streaming with partial previews
