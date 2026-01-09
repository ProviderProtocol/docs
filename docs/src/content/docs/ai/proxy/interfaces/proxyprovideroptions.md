---
title: "Interface: ProxyProviderOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ProxyProviderOptions

# Interface: ProxyProviderOptions

Defined in: [src/providers/proxy/types.ts:24](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/types.ts#L24)

Configuration options for creating a proxy provider.

## Properties

### endpoint

> **endpoint**: `string`

Defined in: [src/providers/proxy/types.ts:26](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/types.ts#L26)

The endpoint URL to proxy requests to

***

### fetch?

> `optional` **fetch**: *typeof* `fetch`

Defined in: [src/providers/proxy/types.ts:32](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/types.ts#L32)

Custom fetch implementation

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [src/providers/proxy/types.ts:29](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/types.ts#L29)

Default headers to include in all requests

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/providers/proxy/types.ts:35](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/types.ts#L35)

Request timeout in milliseconds (default: 120000)
