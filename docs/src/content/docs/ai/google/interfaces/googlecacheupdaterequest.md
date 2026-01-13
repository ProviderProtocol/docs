---
title: "Interface: GoogleCacheUpdateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheUpdateRequest

# Interface: GoogleCacheUpdateRequest

Defined in: [src/providers/google/types.ts:547](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L547)

Request body for updating a cached content entry.
Only expiration can be updated; all other fields are immutable.

## Properties

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:549](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L549)

New absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:551](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L551)

New time-to-live duration (e.g., "3600s", mutually exclusive with expireTime)
