---
title: "Interface: AdapterOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / AdapterOptions

# Interface: AdapterOptions

Defined in: [src/providers/proxy/server/types.ts:52](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/proxy/server/types.ts#L52)

Options for adapter middleware.

## Properties

### onError()?

> `optional` **onError**: (`error`) => `object`

Defined in: [src/providers/proxy/server/types.ts:54](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/proxy/server/types.ts#L54)

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
