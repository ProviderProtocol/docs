---
title: "Interface: GoogleCacheCreateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheCreateRequest

# Interface: GoogleCacheCreateRequest

Defined in: [src/providers/google/types.ts:493](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L493)

Request body for creating a cached content entry.

## See

[Google Caching API docs](https://ai.google.dev/api/caching)

## Properties

### contents?

> `optional` **contents**: `GoogleContent`[]

Defined in: [src/providers/google/types.ts:499](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L499)

Content to cache (immutable after creation)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:497](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L497)

Optional display name for the cache (max 128 chars)

***

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:515](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L515)

Absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:495](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L495)

Model to use with this cache (format: models/{model})

***

### systemInstruction?

> `optional` **systemInstruction**: `object`

Defined in: [src/providers/google/types.ts:501](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L501)

System instruction to cache (text-only, immutable after creation)

#### parts

> **parts**: `object`[]

#### role?

> `optional` **role**: `"user"`

***

### toolConfig?

> `optional` **toolConfig**: `object`

Defined in: [src/providers/google/types.ts:508](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L508)

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

Defined in: [src/providers/google/types.ts:506](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L506)

Tool declarations to cache (immutable after creation)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:517](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L517)

Time-to-live duration (e.g., "300s", "3600s", mutually exclusive with expireTime)
