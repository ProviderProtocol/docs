---
title: "Interface: AdapterOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / AdapterOptions

# Interface: AdapterOptions

Defined in: [src/providers/proxy/server/types.ts:51](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/proxy/server/types.ts#L51)

Options for adapter middleware.

## Properties

### onError()?

> `optional` **onError**: (`error`) => `object`

Defined in: [src/providers/proxy/server/types.ts:53](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/proxy/server/types.ts#L53)

Custom error handler

#### Parameters

##### error

`Error`

#### Returns

`object`

##### message

> **message**: `string`

##### status

> **status**: `number`
