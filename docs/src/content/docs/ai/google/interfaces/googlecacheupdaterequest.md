---
title: "Interface: GoogleCacheUpdateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheUpdateRequest

# Interface: GoogleCacheUpdateRequest

Defined in: [src/providers/google/types.ts:598](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L598)

Request body for updating a cached content entry.
Only expiration can be updated; all other fields are immutable.

## Properties

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:600](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L600)

New absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:602](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L602)

New time-to-live duration (e.g., "3600s", mutually exclusive with expireTime)
