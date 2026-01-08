---
title: "Interface: OpenAIFileSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIFileSearchTool

# Interface: OpenAIFileSearchTool

Defined in: [src/providers/openai/types.ts:1104](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/openai/types.ts#L1104)

File search tool for Responses API
Enables the model to search through uploaded files

## Properties

### file\_search?

> `optional` **file\_search**: `object`

Defined in: [src/providers/openai/types.ts:1107](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/openai/types.ts#L1107)

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

Defined in: [src/providers/openai/types.ts:1105](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/openai/types.ts#L1105)
