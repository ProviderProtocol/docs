---
title: "Interface: GoogleCacheCreateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheCreateRequest

# Interface: GoogleCacheCreateRequest

Defined in: [src/providers/google/types.ts:451](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L451)

Request body for creating a cached content entry.

## See

[Google Caching API docs](https://ai.google.dev/api/caching)

## Properties

### contents?

> `optional` **contents**: `GoogleContent`[]

Defined in: [src/providers/google/types.ts:457](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L457)

Content to cache (immutable after creation)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:455](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L455)

Optional display name for the cache (max 128 chars)

***

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:473](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L473)

Absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:453](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L453)

Model to use with this cache (format: models/{model})

***

### systemInstruction?

> `optional` **systemInstruction**: `object`

Defined in: [src/providers/google/types.ts:459](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L459)

System instruction to cache (text-only, immutable after creation)

#### parts

> **parts**: `object`[]

#### role?

> `optional` **role**: `"user"`

***

### toolConfig?

> `optional` **toolConfig**: `object`

Defined in: [src/providers/google/types.ts:466](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L466)

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

Defined in: [src/providers/google/types.ts:464](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L464)

Tool declarations to cache (immutable after creation)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:475](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L475)

Time-to-live duration (e.g., "300s", "3600s", mutually exclusive with expireTime)
