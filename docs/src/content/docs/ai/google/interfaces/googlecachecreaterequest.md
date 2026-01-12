---
title: "Interface: GoogleCacheCreateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheCreateRequest

# Interface: GoogleCacheCreateRequest

Defined in: [src/providers/google/types.ts:460](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L460)

Request body for creating a cached content entry.

## See

[Google Caching API docs](https://ai.google.dev/api/caching)

## Properties

### contents?

> `optional` **contents**: `GoogleContent`[]

Defined in: [src/providers/google/types.ts:466](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L466)

Content to cache (immutable after creation)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:464](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L464)

Optional display name for the cache (max 128 chars)

***

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:482](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L482)

Absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:462](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L462)

Model to use with this cache (format: models/{model})

***

### systemInstruction?

> `optional` **systemInstruction**: `object`

Defined in: [src/providers/google/types.ts:468](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L468)

System instruction to cache (text-only, immutable after creation)

#### parts

> **parts**: `object`[]

#### role?

> `optional` **role**: `"user"`

***

### toolConfig?

> `optional` **toolConfig**: `object`

Defined in: [src/providers/google/types.ts:475](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L475)

Tool configuration to cache (immutable after creation)

#### functionCallingConfig?

> `optional` **functionCallingConfig**: `object`

##### functionCallingConfig.allowedFunctionNames?

> `optional` **allowedFunctionNames**: `string`[]

##### functionCallingConfig.mode?

> `optional` **mode**: `"AUTO"` \| `"ANY"` \| `"NONE"` \| `"VALIDATED"`

***

### tools?

> `optional` **tools**: `GoogleTool`[]

Defined in: [src/providers/google/types.ts:473](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L473)

Tool declarations to cache (immutable after creation)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:484](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L484)

Time-to-live duration (e.g., "300s", "3600s", mutually exclusive with expireTime)
