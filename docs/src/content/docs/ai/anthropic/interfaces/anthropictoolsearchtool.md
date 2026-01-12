---
title: "Interface: AnthropicToolSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicToolSearchTool

# Interface: AnthropicToolSearchTool

Defined in: [src/providers/anthropic/types.ts:926](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L926)

Tool search tool for dynamic tool discovery.

Enables Claude to search through large tool catalogs
using regex or natural language (BM25) queries.

Requires beta header: `advanced-tool-use-2025-11-20`

## Example

```typescript
const tool: AnthropicToolSearchTool = {
  type: 'tool_search_tool_regex_20251119',
  name: 'tool_search_tool_regex',
};
```

## Properties

### name

> **name**: `"tool_search_tool_regex"` \| `"tool_search_tool_bm25"`

Defined in: [src/providers/anthropic/types.ts:930](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L930)

Tool name (must match type variant)

***

### type

> **type**: `"tool_search_tool_regex_20251119"` \| `"tool_search_tool_bm25_20251119"`

Defined in: [src/providers/anthropic/types.ts:928](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L928)

Tool type identifier (regex or BM25 variant)
