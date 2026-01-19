---
title: "Interface: GoogleCacheCreateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheCreateRequest

# Interface: GoogleCacheCreateRequest

Defined in: [src/providers/google/types.ts:544](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L544)

Request body for creating a cached content entry.

## See

[Google Caching API docs](https://ai.google.dev/api/caching)

## Properties

### contents?

> `optional` **contents**: `GoogleContent`[]

Defined in: [src/providers/google/types.ts:550](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L550)

Content to cache (immutable after creation)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:548](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L548)

Optional display name for the cache (max 128 chars)

***

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:566](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L566)

Absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:546](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L546)

Model to use with this cache (format: models/{model})

***

### systemInstruction?

> `optional` **systemInstruction**: `object`

Defined in: [src/providers/google/types.ts:552](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L552)

System instruction to cache (text-only, immutable after creation)

#### parts

> **parts**: `object`[]

#### role?

> `optional` **role**: `"user"`

***

### toolConfig?

> `optional` **toolConfig**: `object`

Defined in: [src/providers/google/types.ts:559](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L559)

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

Defined in: [src/providers/google/types.ts:557](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L557)

Tool declarations to cache (immutable after creation)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:568](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L568)

Time-to-live duration (e.g., "300s", "3600s", mutually exclusive with expireTime)
