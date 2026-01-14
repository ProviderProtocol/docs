---
title: "Interface: CacheCreateOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / CacheCreateOptions

# Interface: CacheCreateOptions

Defined in: [src/providers/google/cache.ts:38](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L38)

Options for creating a cached content entry.

## Properties

### apiKey

> **apiKey**: `string`

Defined in: [src/providers/google/cache.ts:40](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L40)

API key for authentication

***

### config?

> `optional` **config**: [`ProviderConfig`](../../core/interfaces/providerconfig.md)

Defined in: [src/providers/google/cache.ts:42](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L42)

Provider configuration (timeout, retry strategy, custom fetch)

***

### contents?

> `optional` **contents**: `GoogleContent`[]

Defined in: [src/providers/google/cache.ts:50](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L50)

Content messages to cache

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/cache.ts:48](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L48)

Optional display name for the cache (max 128 chars)

***

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/cache.ts:58](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L58)

Absolute expiration time (RFC 3339 format, alternative to ttl)

***

### model

> **model**: `string`

Defined in: [src/providers/google/cache.ts:46](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L46)

Model to associate with this cache (e.g., "gemini-3-flash-preview")

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/providers/google/cache.ts:44](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L44)

Abort signal for cancellation

***

### systemInstruction?

> `optional` **systemInstruction**: `string`

Defined in: [src/providers/google/cache.ts:52](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L52)

System instruction text to cache

***

### tools?

> `optional` **tools**: `GoogleTool`[]

Defined in: [src/providers/google/cache.ts:54](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L54)

Tool declarations to cache

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/cache.ts:56](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/cache.ts#L56)

Time-to-live duration (e.g., "3600s" for 1 hour)
