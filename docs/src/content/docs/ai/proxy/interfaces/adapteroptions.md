---
title: "Interface: AdapterOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / AdapterOptions

# Interface: AdapterOptions

Defined in: [src/providers/proxy/server/types.ts:51](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/types.ts#L51)

Options for adapter middleware.

## Properties

### onError()?

> `optional` **onError**: (`error`) => `object`

Defined in: [src/providers/proxy/server/types.ts:53](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/types.ts#L53)

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
