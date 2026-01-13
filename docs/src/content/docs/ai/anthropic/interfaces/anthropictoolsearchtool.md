---
title: "Interface: AnthropicToolSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicToolSearchTool

# Interface: AnthropicToolSearchTool

Defined in: [src/providers/anthropic/types.ts:927](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L927)

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

Defined in: [src/providers/anthropic/types.ts:931](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L931)

Tool name (must match type variant)

***

### type

> **type**: `"tool_search_tool_regex_20251119"` \| `"tool_search_tool_bm25_20251119"`

Defined in: [src/providers/anthropic/types.ts:929](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L929)

Tool type identifier (regex or BM25 variant)
