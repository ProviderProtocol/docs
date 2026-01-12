---
title: "Interface: CacheListOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / CacheListOptions

# Interface: CacheListOptions

Defined in: [src/providers/google/cache.ts:64](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/cache.ts#L64)

Options for listing cached content entries.

## Properties

### apiKey

> **apiKey**: `string`

Defined in: [src/providers/google/cache.ts:66](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/cache.ts#L66)

API key for authentication

***

### config?

> `optional` **config**: [`ProviderConfig`](../../core/interfaces/providerconfig.md)

Defined in: [src/providers/google/cache.ts:68](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/cache.ts#L68)

Provider configuration (timeout, retry strategy, custom fetch)

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [src/providers/google/cache.ts:72](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/cache.ts#L72)

Maximum number of caches to return per page

***

### pageToken?

> `optional` **pageToken**: `string`

Defined in: [src/providers/google/cache.ts:74](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/cache.ts#L74)

Token for fetching the next page of results

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/providers/google/cache.ts:70](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/cache.ts#L70)

Abort signal for cancellation
