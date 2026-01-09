---
title: "Type Alias: ProxyHandler()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ProxyHandler

# Type Alias: ProxyHandler()

> **ProxyHandler** = (`body`, `meta`) => `Promise`\<[`Turn`](../../core/interfaces/turn.md)\> \| [`StreamResult`](../../core/interfaces/streamresult.md) \| `Promise`\<[`StreamResult`](../../core/interfaces/streamresult.md)\>

Defined in: [src/providers/proxy/server/types.ts:33](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/types.ts#L33)

Handler function signature for proxy endpoints.
Takes parsed request data and returns either a Turn or StreamResult.

## Parameters

### body

[`ParsedBody`](../interfaces/parsedbody.md)

### meta

[`RequestMeta`](../interfaces/requestmeta.md)

## Returns

`Promise`\<[`Turn`](../../core/interfaces/turn.md)\> \| [`StreamResult`](../../core/interfaces/streamresult.md) \| `Promise`\<[`StreamResult`](../../core/interfaces/streamresult.md)\>
