---
title: "Interface: GoogleCacheResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheResponse

# Interface: GoogleCacheResponse

Defined in: [src/providers/google/types.ts:523](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L523)

Response from creating or retrieving a cached content entry.

## Properties

### createTime

> **createTime**: `string`

Defined in: [src/providers/google/types.ts:531](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L531)

When the cache was created (RFC 3339 format)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:529](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L529)

Display name for the cache

***

### expireTime

> **expireTime**: `string`

Defined in: [src/providers/google/types.ts:535](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L535)

When the cache expires (RFC 3339 format)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:527](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L527)

Model this cache is associated with

***

### name

> **name**: `string`

Defined in: [src/providers/google/types.ts:525](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L525)

Cache identifier in format "cachedContents/{id}" - use this in requests

***

### updateTime

> **updateTime**: `string`

Defined in: [src/providers/google/types.ts:533](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L533)

When the cache was last updated (RFC 3339 format)

***

### usageMetadata?

> `optional` **usageMetadata**: `object`

Defined in: [src/providers/google/types.ts:537](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L537)

Token usage metadata

#### totalTokenCount

> **totalTokenCount**: `number`

Total tokens in the cached content
