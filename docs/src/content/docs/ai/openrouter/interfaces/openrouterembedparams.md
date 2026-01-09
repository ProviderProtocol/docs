---
title: "Interface: OpenRouterEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterEmbedParams

# Interface: OpenRouterEmbedParams

Defined in: [src/providers/openrouter/embed.ts:29](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/embed.ts#L29)

OpenRouter embedding parameters.
Passed through unchanged to the API.

## Properties

### dimensions?

> `optional` **dimensions**: `number`

Defined in: [src/providers/openrouter/embed.ts:31](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/embed.ts#L31)

Output dimensions (model-dependent)

***

### encoding\_format?

> `optional` **encoding\_format**: `"base64"` \| `"float"`

Defined in: [src/providers/openrouter/embed.ts:33](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/embed.ts#L33)

Encoding format: 'float' or 'base64'

***

### input\_type?

> `optional` **input\_type**: `string`

Defined in: [src/providers/openrouter/embed.ts:37](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/embed.ts#L37)

Input type hint for some models

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/openrouter/embed.ts:35](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openrouter/embed.ts#L35)

A unique identifier representing your end-user
