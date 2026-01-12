---
title: "Interface: OllamaEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [ollama](../index.md) / OllamaEmbedParams

# Interface: OllamaEmbedParams

Defined in: [src/providers/ollama/embed.ts:29](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/ollama/embed.ts#L29)

Ollama embedding parameters.
Passed through to the API.

## Properties

### keep\_alive?

> `optional` **keep\_alive**: `string`

Defined in: [src/providers/ollama/embed.ts:33](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/ollama/embed.ts#L33)

Controls how long the model stays loaded in memory (e.g., '5m', '1h')

***

### options?

> `optional` **options**: `Record`\<`string`, `unknown`\>

Defined in: [src/providers/ollama/embed.ts:35](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/ollama/embed.ts#L35)

Additional model options

***

### truncate?

> `optional` **truncate**: `boolean`

Defined in: [src/providers/ollama/embed.ts:31](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/ollama/embed.ts#L31)

Truncates the end of each input to fit within context length (default: true)
