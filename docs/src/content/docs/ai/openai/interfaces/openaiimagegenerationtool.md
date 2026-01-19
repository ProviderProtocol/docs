---
title: "Interface: OpenAIImageGenerationTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIImageGenerationTool

# Interface: OpenAIImageGenerationTool

Defined in: [src/providers/openai/types.ts:1249](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1249)

Image generation tool for Responses API

## Properties

### background?

> `optional` **background**: `"auto"` \| `"transparent"` \| `"opaque"`

Defined in: [src/providers/openai/types.ts:1252](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1252)

Background transparency

***

### input\_image\_mask?

> `optional` **input\_image\_mask**: `boolean`

Defined in: [src/providers/openai/types.ts:1254](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1254)

Input image formats supported

***

### model?

> `optional` **model**: `string`

Defined in: [src/providers/openai/types.ts:1256](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1256)

Model to use for generation

***

### moderation?

> `optional` **moderation**: `"auto"` \| `"low"`

Defined in: [src/providers/openai/types.ts:1258](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1258)

Moderation level

***

### output\_compression?

> `optional` **output\_compression**: `number`

Defined in: [src/providers/openai/types.ts:1260](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1260)

Output compression

***

### output\_format?

> `optional` **output\_format**: `"jpeg"` \| `"png"` \| `"webp"`

Defined in: [src/providers/openai/types.ts:1262](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1262)

Output format

***

### partial\_images?

> `optional` **partial\_images**: `number`

Defined in: [src/providers/openai/types.ts:1264](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1264)

Partial images during streaming

***

### quality?

> `optional` **quality**: `"auto"` \| `"low"` \| `"medium"` \| `"high"`

Defined in: [src/providers/openai/types.ts:1266](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1266)

Image quality

***

### size?

> `optional` **size**: `"auto"` \| `"1024x1024"` \| `"1024x1536"` \| `"1536x1024"`

Defined in: [src/providers/openai/types.ts:1268](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1268)

Image size

***

### type

> **type**: `"image_generation"`

Defined in: [src/providers/openai/types.ts:1250](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/openai/types.ts#L1250)
