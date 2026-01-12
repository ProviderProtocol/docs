---
title: "Interface: XAIFileSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIFileSearchTool

# Interface: XAIFileSearchTool

Defined in: [src/providers/xai/types.ts:382](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L382)

File/collections search tool for document retrieval.

Enables Grok to search through uploaded document collections.
Pricing: $2.50 per 1,000 successful tool invocations.

## Example

```typescript
const tool: XAIFileSearchTool = {
  type: 'file_search',
  vector_store_ids: ['vs_abc123'],
  max_num_results: 10,
};
```

## Properties

### max\_num\_results?

> `optional` **max\_num\_results**: `number`

Defined in: [src/providers/xai/types.ts:388](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L388)

Maximum results to return

***

### retrieval\_mode?

> `optional` **retrieval\_mode**: `object`

Defined in: [src/providers/xai/types.ts:390](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L390)

Retrieval mode configuration

#### type

> **type**: `"keyword"` \| `"semantic"` \| `"hybrid"`

***

### type

> **type**: `"file_search"`

Defined in: [src/providers/xai/types.ts:384](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L384)

Tool type identifier

***

### vector\_store\_ids

> **vector\_store\_ids**: `string`[]

Defined in: [src/providers/xai/types.ts:386](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L386)

Collection/vector store IDs to search
