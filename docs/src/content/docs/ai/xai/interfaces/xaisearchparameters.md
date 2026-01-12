---
title: "~~Interface: XAISearchParameters~~"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAISearchParameters

# ~~Interface: XAISearchParameters~~

Defined in: [src/providers/xai/types.ts:275](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L275)

Live Search parameters for real-time web search integration.

## Deprecated

Live Search API will be removed on December 15, 2025.
Use the Agent Tools API with `web_search` tool instead.

## Properties

### ~~from\_date?~~

> `optional` **from\_date**: `string`

Defined in: [src/providers/xai/types.ts:279](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L279)

Limit search to specific date range

***

### ~~max\_search\_results?~~

> `optional` **max\_search\_results**: `number`

Defined in: [src/providers/xai/types.ts:285](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L285)

Maximum number of search results

***

### ~~mode?~~

> `optional` **mode**: `"auto"` \| `"on"` \| `"off"`

Defined in: [src/providers/xai/types.ts:277](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L277)

Search mode

***

### ~~sources?~~

> `optional` **sources**: (`"x"` \| `"web"` \| `"news"` \| `"rss"`)[]

Defined in: [src/providers/xai/types.ts:283](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L283)

Sources to search

***

### ~~to\_date?~~

> `optional` **to\_date**: `string`

Defined in: [src/providers/xai/types.ts:281](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L281)

End date for search range
