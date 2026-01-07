---
title: "Interface: OpenAIImageGenerationTool"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / OpenAIImageGenerationTool

# Interface: OpenAIImageGenerationTool

Defined in: [src/providers/openai/types.ts:1177](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1177)

Image generation tool for Responses API

## Properties

### background?

> `optional` **background**: `"auto"` \| `"transparent"` \| `"opaque"`

Defined in: [src/providers/openai/types.ts:1180](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1180)

Background transparency

***

### input\_image\_mask?

> `optional` **input\_image\_mask**: `boolean`

Defined in: [src/providers/openai/types.ts:1182](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1182)

Input image formats supported

***

### model?

> `optional` **model**: `string`

Defined in: [src/providers/openai/types.ts:1184](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1184)

Model to use for generation

***

### moderation?

> `optional` **moderation**: `"auto"` \| `"low"`

Defined in: [src/providers/openai/types.ts:1186](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1186)

Moderation level

***

### output\_compression?

> `optional` **output\_compression**: `number`

Defined in: [src/providers/openai/types.ts:1188](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1188)

Output compression

***

### output\_format?

> `optional` **output\_format**: `"jpeg"` \| `"png"` \| `"webp"`

Defined in: [src/providers/openai/types.ts:1190](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1190)

Output format

***

### partial\_images?

> `optional` **partial\_images**: `number`

Defined in: [src/providers/openai/types.ts:1192](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1192)

Partial images during streaming

***

### quality?

> `optional` **quality**: `"auto"` \| `"high"` \| `"medium"` \| `"low"`

Defined in: [src/providers/openai/types.ts:1194](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1194)

Image quality

***

### size?

> `optional` **size**: `"auto"` \| `"1024x1024"` \| `"1024x1536"` \| `"1536x1024"`

Defined in: [src/providers/openai/types.ts:1196](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1196)

Image size

***

### type

> **type**: `"image_generation"`

Defined in: [src/providers/openai/types.ts:1178](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1178)
