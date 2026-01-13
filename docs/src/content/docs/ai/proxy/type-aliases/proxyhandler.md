---
title: "Type Alias: ProxyHandler()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ProxyHandler

# Type Alias: ProxyHandler()

> **ProxyHandler** = (`body`, `meta`) => `Promise`\<[`Turn`](../../core/interfaces/turn.md)\> \| [`StreamResult`](../../core/interfaces/streamresult.md) \| `Promise`\<[`StreamResult`](../../core/interfaces/streamresult.md)\>

Defined in: [src/providers/proxy/server/types.ts:34](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/types.ts#L34)

Handler function signature for proxy endpoints.
Takes parsed request data and returns either a Turn or StreamResult.

## Parameters

### body

[`ParsedBody`](../interfaces/parsedbody.md)

### meta

[`RequestMeta`](../interfaces/requestmeta.md)

## Returns

`Promise`\<[`Turn`](../../core/interfaces/turn.md)\> \| [`StreamResult`](../../core/interfaces/streamresult.md) \| `Promise`\<[`StreamResult`](../../core/interfaces/streamresult.md)\>
