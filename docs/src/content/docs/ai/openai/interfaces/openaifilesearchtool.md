---
title: "Interface: OpenAIFileSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIFileSearchTool

# Interface: OpenAIFileSearchTool

Defined in: [src/providers/openai/types.ts:1105](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1105)

File search tool for Responses API
Enables the model to search through uploaded files

## Properties

### file\_search?

> `optional` **file\_search**: `object`

Defined in: [src/providers/openai/types.ts:1108](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1108)

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

Defined in: [src/providers/openai/types.ts:1106](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1106)
