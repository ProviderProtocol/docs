---
title: "Interface: GoogleCacheListResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheListResponse

# Interface: GoogleCacheListResponse

Defined in: [src/providers/google/types.ts:604](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L604)

Response from listing cached content entries.

## Properties

### cachedContents?

> `optional` **cachedContents**: [`GoogleCacheResponse`](googlecacheresponse.md)[]

Defined in: [src/providers/google/types.ts:606](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L606)

Array of cached content entries

***

### nextPageToken?

> `optional` **nextPageToken**: `string`

Defined in: [src/providers/google/types.ts:608](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L608)

Token for fetching the next page of results
