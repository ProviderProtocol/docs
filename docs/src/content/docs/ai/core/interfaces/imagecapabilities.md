---
title: "Interface: ImageCapabilities"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageCapabilities

# Interface: ImageCapabilities

Defined in: [src/types/image.ts:156](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L156)

Image generation capabilities.

## Properties

### edit

> **edit**: `boolean`

Defined in: [src/types/image.ts:164](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L164)

Supports image editing/inpainting

***

### generate

> **generate**: `boolean`

Defined in: [src/types/image.ts:158](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L158)

Supports text-to-image generation

***

### maxImages?

> `optional` **maxImages**: `number`

Defined in: [src/types/image.ts:167](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L167)

Maximum images per request (if known)

***

### streaming

> **streaming**: `boolean`

Defined in: [src/types/image.ts:161](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L161)

Supports streaming with partial previews
