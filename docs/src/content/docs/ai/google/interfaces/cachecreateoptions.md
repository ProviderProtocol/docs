---
title: "Interface: CacheCreateOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / CacheCreateOptions

# Interface: CacheCreateOptions

Defined in: [src/providers/google/cache.ts:27](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L27)

Options for creating a cached content entry.

## Properties

### apiKey

> **apiKey**: `string`

Defined in: [src/providers/google/cache.ts:29](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L29)

API key for authentication

***

### contents?

> `optional` **contents**: `GoogleContent`[]

Defined in: [src/providers/google/cache.ts:35](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L35)

Content messages to cache

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/cache.ts:33](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L33)

Optional display name for the cache (max 128 chars)

***

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/cache.ts:43](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L43)

Absolute expiration time (RFC 3339 format, alternative to ttl)

***

### model

> **model**: `string`

Defined in: [src/providers/google/cache.ts:31](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L31)

Model to associate with this cache (e.g., "gemini-3-flash-preview")

***

### systemInstruction?

> `optional` **systemInstruction**: `string`

Defined in: [src/providers/google/cache.ts:37](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L37)

System instruction text to cache

***

### tools?

> `optional` **tools**: `GoogleTool`[]

Defined in: [src/providers/google/cache.ts:39](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L39)

Tool declarations to cache

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/cache.ts:41](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/cache.ts#L41)

Time-to-live duration (e.g., "3600s" for 1 hour)
