---
title: "~~Interface: XAISearchParameters~~"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [xai](../README.md) / XAISearchParameters

# ~~Interface: XAISearchParameters~~

Defined in: [src/providers/xai/types.ts:239](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L239)

Live Search parameters for real-time web search integration.

## Deprecated

Live Search API will be removed on December 15, 2025.
Use the Agent Tools API with `web_search` tool instead.

## Properties

### ~~from\_date?~~

> `optional` **from\_date**: `string`

Defined in: [src/providers/xai/types.ts:243](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L243)

Limit search to specific date range

***

### ~~max\_search\_results?~~

> `optional` **max\_search\_results**: `number`

Defined in: [src/providers/xai/types.ts:249](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L249)

Maximum number of search results

***

### ~~mode?~~

> `optional` **mode**: `"auto"` \| `"on"` \| `"off"`

Defined in: [src/providers/xai/types.ts:241](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L241)

Search mode

***

### ~~sources?~~

> `optional` **sources**: (`"x"` \| `"web"` \| `"news"` \| `"rss"`)[]

Defined in: [src/providers/xai/types.ts:247](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L247)

Sources to search

***

### ~~to\_date?~~

> `optional` **to\_date**: `string`

Defined in: [src/providers/xai/types.ts:245](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L245)

End date for search range
