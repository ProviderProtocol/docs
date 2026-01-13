---
title: "Interface: GoogleCacheCreateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheCreateRequest

# Interface: GoogleCacheCreateRequest

Defined in: [src/providers/google/types.ts:540](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L540)

Request body for creating a cached content entry.

## See

[Google Caching API docs](https://ai.google.dev/api/caching)

## Properties

### contents?

> `optional` **contents**: `GoogleContent`[]

Defined in: [src/providers/google/types.ts:546](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L546)

Content to cache (immutable after creation)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:544](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L544)

Optional display name for the cache (max 128 chars)

***

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:562](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L562)

Absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:542](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L542)

Model to use with this cache (format: models/{model})

***

### systemInstruction?

> `optional` **systemInstruction**: `object`

Defined in: [src/providers/google/types.ts:548](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L548)

System instruction to cache (text-only, immutable after creation)

#### parts

> **parts**: `object`[]

#### role?

> `optional` **role**: `"user"`

***

### toolConfig?

> `optional` **toolConfig**: `object`

Defined in: [src/providers/google/types.ts:555](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L555)

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

Defined in: [src/providers/google/types.ts:553](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L553)

Tool declarations to cache (immutable after creation)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:564](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L564)

Time-to-live duration (e.g., "300s", "3600s", mutually exclusive with expireTime)
