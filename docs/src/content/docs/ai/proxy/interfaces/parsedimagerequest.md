---
title: "Interface: ParsedImageRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ParsedImageRequest

# Interface: ParsedImageRequest

Defined in: [src/providers/proxy/server/webapi.ts:67](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/webapi.ts#L67)

Parsed request body for image endpoints.

## Properties

### image?

> `optional` **image**: [`Image`](../../core/classes/image.md)

Defined in: [src/providers/proxy/server/webapi.ts:71](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/webapi.ts#L71)

***

### mask?

> `optional` **mask**: [`Image`](../../core/classes/image.md)

Defined in: [src/providers/proxy/server/webapi.ts:72](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/webapi.ts#L72)

***

### model?

> `optional` **model**: `string`

Defined in: [src/providers/proxy/server/webapi.ts:70](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/webapi.ts#L70)

***

### params?

> `optional` **params**: `Record`\<`string`, `unknown`\>

Defined in: [src/providers/proxy/server/webapi.ts:69](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/webapi.ts#L69)

***

### prompt

> **prompt**: `string`

Defined in: [src/providers/proxy/server/webapi.ts:68](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/webapi.ts#L68)
