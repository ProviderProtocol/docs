---
title: "Interface: GoogleCacheResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheResponse

# Interface: GoogleCacheResponse

Defined in: [src/providers/google/types.ts:481](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L481)

Response from creating or retrieving a cached content entry.

## Properties

### createTime

> **createTime**: `string`

Defined in: [src/providers/google/types.ts:489](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L489)

When the cache was created (RFC 3339 format)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:487](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L487)

Display name for the cache

***

### expireTime

> **expireTime**: `string`

Defined in: [src/providers/google/types.ts:493](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L493)

When the cache expires (RFC 3339 format)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:485](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L485)

Model this cache is associated with

***

### name

> **name**: `string`

Defined in: [src/providers/google/types.ts:483](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L483)

Cache identifier in format "cachedContents/{id}" - use this in requests

***

### updateTime

> **updateTime**: `string`

Defined in: [src/providers/google/types.ts:491](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L491)

When the cache was last updated (RFC 3339 format)

***

### usageMetadata?

> `optional` **usageMetadata**: `object`

Defined in: [src/providers/google/types.ts:495](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L495)

Token usage metadata

#### totalTokenCount

> **totalTokenCount**: `number`

Total tokens in the cached content
