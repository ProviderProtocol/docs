---
title: "Interface: RequestMeta"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / RequestMeta

# Interface: RequestMeta

Defined in: [src/providers/proxy/server/types.ts:41](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/proxy/server/types.ts#L41)

Metadata about the incoming request.

## Properties

### headers

> **headers**: `Record`\<`string`, `string` \| `undefined`\>

Defined in: [src/providers/proxy/server/types.ts:45](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/proxy/server/types.ts#L45)

Raw headers from the request

***

### wantsStream

> **wantsStream**: `boolean`

Defined in: [src/providers/proxy/server/types.ts:43](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/proxy/server/types.ts#L43)

Whether the client wants a streaming response
