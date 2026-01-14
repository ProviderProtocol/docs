---
title: "Interface: ProxyProviderOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ProxyProviderOptions

# Interface: ProxyProviderOptions

Defined in: [src/providers/proxy/types.ts:46](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/types.ts#L46)

Configuration options for creating a proxy provider.

## Properties

### endpoint

> **endpoint**: `string`

Defined in: [src/providers/proxy/types.ts:48](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/types.ts#L48)

The endpoint URL to proxy requests to

***

### fetch?

> `optional` **fetch**: *typeof* `fetch`

Defined in: [src/providers/proxy/types.ts:54](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/types.ts#L54)

Custom fetch implementation

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [src/providers/proxy/types.ts:51](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/types.ts#L51)

Default headers to include in all requests

***

### timeout?

> `optional` **timeout**: `number`

Defined in: [src/providers/proxy/types.ts:57](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/types.ts#L57)

Request timeout in milliseconds (default: 120000)
