---
title: "Interface: OpenAIImageGenerationTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIImageGenerationTool

# Interface: OpenAIImageGenerationTool

Defined in: [src/providers/openai/types.ts:1224](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1224)

Image generation tool for Responses API

## Properties

### background?

> `optional` **background**: `"auto"` \| `"transparent"` \| `"opaque"`

Defined in: [src/providers/openai/types.ts:1227](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1227)

Background transparency

***

### input\_image\_mask?

> `optional` **input\_image\_mask**: `boolean`

Defined in: [src/providers/openai/types.ts:1229](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1229)

Input image formats supported

***

### model?

> `optional` **model**: `string`

Defined in: [src/providers/openai/types.ts:1231](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1231)

Model to use for generation

***

### moderation?

> `optional` **moderation**: `"auto"` \| `"low"`

Defined in: [src/providers/openai/types.ts:1233](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1233)

Moderation level

***

### output\_compression?

> `optional` **output\_compression**: `number`

Defined in: [src/providers/openai/types.ts:1235](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1235)

Output compression

***

### output\_format?

> `optional` **output\_format**: `"jpeg"` \| `"png"` \| `"webp"`

Defined in: [src/providers/openai/types.ts:1237](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1237)

Output format

***

### partial\_images?

> `optional` **partial\_images**: `number`

Defined in: [src/providers/openai/types.ts:1239](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1239)

Partial images during streaming

***

### quality?

> `optional` **quality**: `"auto"` \| `"low"` \| `"medium"` \| `"high"`

Defined in: [src/providers/openai/types.ts:1241](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1241)

Image quality

***

### size?

> `optional` **size**: `"auto"` \| `"1024x1024"` \| `"1024x1536"` \| `"1536x1024"`

Defined in: [src/providers/openai/types.ts:1243](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1243)

Image size

***

### type

> **type**: `"image_generation"`

Defined in: [src/providers/openai/types.ts:1225](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1225)
