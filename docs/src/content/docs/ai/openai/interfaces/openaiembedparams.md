---
title: "Interface: OpenAIEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIEmbedParams

# Interface: OpenAIEmbedParams

Defined in: [src/providers/openai/embed.ts:30](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/embed.ts#L30)

OpenAI embedding parameters.
Passed through unchanged to the API.

## Properties

### dimensions?

> `optional` **dimensions**: `number`

Defined in: [src/providers/openai/embed.ts:32](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/embed.ts#L32)

Output dimensions (text-embedding-3 models only)

***

### encoding\_format?

> `optional` **encoding\_format**: `"base64"` \| `"float"`

Defined in: [src/providers/openai/embed.ts:34](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/embed.ts#L34)

Encoding format: 'float' or 'base64'

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openai/embed.ts:36](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/embed.ts#L36)

A unique identifier representing your end-user
