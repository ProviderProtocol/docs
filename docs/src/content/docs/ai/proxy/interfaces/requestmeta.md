---
title: "Interface: RequestMeta"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / RequestMeta

# Interface: RequestMeta

Defined in: [src/providers/proxy/server/types.ts:41](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/types.ts#L41)

Metadata about the incoming request.

## Properties

### headers

> **headers**: `Record`\<`string`, `string` \| `undefined`\>

Defined in: [src/providers/proxy/server/types.ts:45](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/types.ts#L45)

Raw headers from the request

***

### wantsStream

> **wantsStream**: `boolean`

Defined in: [src/providers/proxy/server/types.ts:43](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/types.ts#L43)

Whether the client wants a streaming response
