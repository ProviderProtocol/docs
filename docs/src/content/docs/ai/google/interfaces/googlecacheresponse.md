---
title: "Interface: GoogleCacheResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheResponse

# Interface: GoogleCacheResponse

Defined in: [src/providers/google/types.ts:490](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L490)

Response from creating or retrieving a cached content entry.

## Properties

### createTime

> **createTime**: `string`

Defined in: [src/providers/google/types.ts:498](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L498)

When the cache was created (RFC 3339 format)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:496](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L496)

Display name for the cache

***

### expireTime

> **expireTime**: `string`

Defined in: [src/providers/google/types.ts:502](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L502)

When the cache expires (RFC 3339 format)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:494](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L494)

Model this cache is associated with

***

### name

> **name**: `string`

Defined in: [src/providers/google/types.ts:492](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L492)

Cache identifier in format "cachedContents/{id}" - use this in requests

***

### updateTime

> **updateTime**: `string`

Defined in: [src/providers/google/types.ts:500](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L500)

When the cache was last updated (RFC 3339 format)

***

### usageMetadata?

> `optional` **usageMetadata**: `object`

Defined in: [src/providers/google/types.ts:504](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L504)

Token usage metadata

#### totalTokenCount

> **totalTokenCount**: `number`

Total tokens in the cached content
