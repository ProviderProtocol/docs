---
title: "Interface: GoogleFileSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleFileSearchTool

# Interface: GoogleFileSearchTool

Defined in: [src/providers/google/types.ts:665](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L665)

File search (RAG) tool for document retrieval.

Enables Gemini to search through uploaded documents
using semantic search on FileSearchStore.

Pricing:
- Embeddings at indexing: $0.15 per 1M tokens
- Storage and query embeddings: Free

Note: Cannot be combined with other built-in tools.

## Example

```typescript
const tool: GoogleFileSearchTool = {
  fileSearch: {
    fileSearchStoreNames: ['fileSearchStores/abc123'],
  },
};
```

## Properties

### fileSearch

> **fileSearch**: `object`

Defined in: [src/providers/google/types.ts:667](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L667)

File search configuration

#### fileSearchStoreNames

> **fileSearchStoreNames**: `string`[]

FileSearchStore names to query

#### metadataFilter?

> `optional` **metadataFilter**: `string`

AIP-160 filter syntax for metadata filtering
