---
title: "Function: fileSearchTool()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / fileSearchTool

# Function: fileSearchTool()

> **fileSearchTool**(`options`): [`OpenAIFileSearchTool`](../interfaces/openaifilesearchtool.md)

Defined in: [src/providers/openai/types.ts:1353](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/openai/types.ts#L1353)

Creates a file search tool configuration for the Responses API.

The file search tool enables the model to search through files in vector stores.

## Parameters

### options

Configuration including vector store IDs and search options

#### filters?

`Record`\<`string`, `unknown`\>

#### max_num_results?

`number`

#### ranking_options?

\{ `ranker?`: `"auto"` \| `"default_2024_08_21"`; `score_threshold?`: `number`; \}

#### ranking_options.ranker?

`"auto"` \| `"default_2024_08_21"`

#### ranking_options.score_threshold?

`number`

#### vector_store_ids

`string`[]

## Returns

[`OpenAIFileSearchTool`](../interfaces/openaifilesearchtool.md)

A file search tool configuration object

## Example

```typescript
const fileSearch = fileSearchTool({
  vector_store_ids: ['vs_abc123'],
  max_num_results: 10
});
```
