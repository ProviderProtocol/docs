---
title: "Interface: OpenAIFileSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIFileSearchTool

# Interface: OpenAIFileSearchTool

Defined in: [src/providers/openai/types.ts:1151](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openai/types.ts#L1151)

File search tool for Responses API
Enables the model to search through uploaded files

## Properties

### file\_search?

> `optional` **file\_search**: `object`

Defined in: [src/providers/openai/types.ts:1154](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openai/types.ts#L1154)

File search configuration

#### filters?

> `optional` **filters**: `Record`\<`string`, `unknown`\>

Filters to apply

#### max\_num\_results?

> `optional` **max\_num\_results**: `number`

Maximum number of results to return

#### ranking\_options?

> `optional` **ranking\_options**: `object`

Ranking options for search results

##### ranking\_options.ranker?

> `optional` **ranker**: `"auto"` \| `"default_2024_08_21"`

Ranker to use

##### ranking\_options.score\_threshold?

> `optional` **score\_threshold**: `number`

Score threshold (0-1)

#### vector\_store\_ids

> **vector\_store\_ids**: `string`[]

Vector store IDs to search

***

### type

> **type**: `"file_search"`

Defined in: [src/providers/openai/types.ts:1152](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openai/types.ts#L1152)
