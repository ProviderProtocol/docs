---
title: "Interface: GoogleCacheResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheResponse

# Interface: GoogleCacheResponse

Defined in: [src/providers/google/types.ts:570](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L570)

Response from creating or retrieving a cached content entry.

## Properties

### createTime

> **createTime**: `string`

Defined in: [src/providers/google/types.ts:578](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L578)

When the cache was created (RFC 3339 format)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:576](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L576)

Display name for the cache

***

### expireTime

> **expireTime**: `string`

Defined in: [src/providers/google/types.ts:582](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L582)

When the cache expires (RFC 3339 format)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:574](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L574)

Model this cache is associated with

***

### name

> **name**: `string`

Defined in: [src/providers/google/types.ts:572](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L572)

Cache identifier in format "cachedContents/{id}" - use this in requests

***

### updateTime

> **updateTime**: `string`

Defined in: [src/providers/google/types.ts:580](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L580)

When the cache was last updated (RFC 3339 format)

***

### usageMetadata?

> `optional` **usageMetadata**: `object`

Defined in: [src/providers/google/types.ts:584](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L584)

Token usage metadata

#### totalTokenCount

> **totalTokenCount**: `number`

Total tokens in the cached content
