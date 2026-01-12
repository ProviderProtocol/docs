---
title: "Interface: OpenAIImageGenerationTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIImageGenerationTool

# Interface: OpenAIImageGenerationTool

Defined in: [src/providers/openai/types.ts:1178](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1178)

Image generation tool for Responses API

## Properties

### background?

> `optional` **background**: `"auto"` \| `"transparent"` \| `"opaque"`

Defined in: [src/providers/openai/types.ts:1181](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1181)

Background transparency

***

### input\_image\_mask?

> `optional` **input\_image\_mask**: `boolean`

Defined in: [src/providers/openai/types.ts:1183](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1183)

Input image formats supported

***

### model?

> `optional` **model**: `string`

Defined in: [src/providers/openai/types.ts:1185](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1185)

Model to use for generation

***

### moderation?

> `optional` **moderation**: `"auto"` \| `"low"`

Defined in: [src/providers/openai/types.ts:1187](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1187)

Moderation level

***

### output\_compression?

> `optional` **output\_compression**: `number`

Defined in: [src/providers/openai/types.ts:1189](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1189)

Output compression

***

### output\_format?

> `optional` **output\_format**: `"jpeg"` \| `"png"` \| `"webp"`

Defined in: [src/providers/openai/types.ts:1191](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1191)

Output format

***

### partial\_images?

> `optional` **partial\_images**: `number`

Defined in: [src/providers/openai/types.ts:1193](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1193)

Partial images during streaming

***

### quality?

> `optional` **quality**: `"auto"` \| `"high"` \| `"medium"` \| `"low"`

Defined in: [src/providers/openai/types.ts:1195](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1195)

Image quality

***

### size?

> `optional` **size**: `"auto"` \| `"1024x1024"` \| `"1024x1536"` \| `"1536x1024"`

Defined in: [src/providers/openai/types.ts:1197](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1197)

Image size

***

### type

> **type**: `"image_generation"`

Defined in: [src/providers/openai/types.ts:1179](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1179)
