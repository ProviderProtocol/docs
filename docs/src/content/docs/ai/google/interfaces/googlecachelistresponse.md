---
title: "Interface: GoogleCacheListResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheListResponse

# Interface: GoogleCacheListResponse

Defined in: [src/providers/google/types.ts:524](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L524)

Response from listing cached content entries.

## Properties

### cachedContents?

> `optional` **cachedContents**: [`GoogleCacheResponse`](googlecacheresponse.md)[]

Defined in: [src/providers/google/types.ts:526](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L526)

Array of cached content entries

***

### nextPageToken?

> `optional` **nextPageToken**: `string`

Defined in: [src/providers/google/types.ts:528](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L528)

Token for fetching the next page of results
