---
title: "Interface: OpenRouterEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterEmbedParams

# Interface: OpenRouterEmbedParams

Defined in: [src/providers/openrouter/embed.ts:30](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openrouter/embed.ts#L30)

OpenRouter embedding parameters.
Passed through unchanged to the API.

## Properties

### dimensions?

> `optional` **dimensions**: `number`

Defined in: [src/providers/openrouter/embed.ts:32](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openrouter/embed.ts#L32)

Output dimensions (model-dependent)

***

### encoding\_format?

> `optional` **encoding\_format**: `"base64"` \| `"float"`

Defined in: [src/providers/openrouter/embed.ts:34](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openrouter/embed.ts#L34)

Encoding format: 'float' or 'base64'

***

### input\_type?

> `optional` **input\_type**: `string`

Defined in: [src/providers/openrouter/embed.ts:38](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openrouter/embed.ts#L38)

Input type hint for some models

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openrouter/embed.ts:36](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openrouter/embed.ts#L36)

A unique identifier representing your end-user
