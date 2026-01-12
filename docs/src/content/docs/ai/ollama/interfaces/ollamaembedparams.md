---
title: "Interface: OllamaEmbedParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [ollama](../index.md) / OllamaEmbedParams

# Interface: OllamaEmbedParams

Defined in: [src/providers/ollama/embed.ts:30](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/ollama/embed.ts#L30)

Ollama embedding parameters.
Passed through to the API.

## Properties

### keep\_alive?

> `optional` **keep\_alive**: `string`

Defined in: [src/providers/ollama/embed.ts:34](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/ollama/embed.ts#L34)

Controls how long the model stays loaded in memory (e.g., '5m', '1h')

***

### options?

> `optional` **options**: `Record`\<`string`, `unknown`\>

Defined in: [src/providers/ollama/embed.ts:36](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/ollama/embed.ts#L36)

Additional model options

***

### truncate?

> `optional` **truncate**: `boolean`

Defined in: [src/providers/ollama/embed.ts:32](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/ollama/embed.ts#L32)

Truncates the end of each input to fit within context length (default: true)
