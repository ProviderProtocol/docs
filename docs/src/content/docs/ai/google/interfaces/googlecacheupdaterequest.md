---
title: "Interface: GoogleCacheUpdateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheUpdateRequest

# Interface: GoogleCacheUpdateRequest

Defined in: [src/providers/google/types.ts:514](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L514)

Request body for updating a cached content entry.
Only expiration can be updated; all other fields are immutable.

## Properties

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:516](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L516)

New absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:518](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L518)

New time-to-live duration (e.g., "3600s", mutually exclusive with expireTime)
