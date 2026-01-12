---
title: "Interface: ImageCapabilities"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageCapabilities

# Interface: ImageCapabilities

Defined in: [src/types/image.ts:147](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L147)

Image generation capabilities.

## Properties

### edit

> **edit**: `boolean`

Defined in: [src/types/image.ts:155](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L155)

Supports image editing/inpainting

***

### generate

> **generate**: `boolean`

Defined in: [src/types/image.ts:149](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L149)

Supports text-to-image generation

***

### maxImages?

> `optional` **maxImages**: `number`

Defined in: [src/types/image.ts:158](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L158)

Maximum images per request (if known)

***

### streaming

> **streaming**: `boolean`

Defined in: [src/types/image.ts:152](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L152)

Supports streaming with partial previews
