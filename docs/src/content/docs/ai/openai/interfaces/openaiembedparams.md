---
title: "Interface: OpenAIEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIEmbedParams

# Interface: OpenAIEmbedParams

Defined in: [src/providers/openai/embed.ts:29](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openai/embed.ts#L29)

OpenAI embedding parameters.
Passed through unchanged to the API.

## Properties

### dimensions?

> `optional` **dimensions**: `number`

Defined in: [src/providers/openai/embed.ts:31](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openai/embed.ts#L31)

Output dimensions (text-embedding-3 models only)

***

### encoding\_format?

> `optional` **encoding\_format**: `"base64"` \| `"float"`

Defined in: [src/providers/openai/embed.ts:33](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openai/embed.ts#L33)

Encoding format: 'float' or 'base64'

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openai/embed.ts:35](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openai/embed.ts#L35)

A unique identifier representing your end-user
