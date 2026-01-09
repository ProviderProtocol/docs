---
title: "Interface: AdapterOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / AdapterOptions

# Interface: AdapterOptions

Defined in: [src/providers/proxy/server/types.ts:51](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/types.ts#L51)

Options for adapter middleware.

## Properties

### onError()?

> `optional` **onError**: (`error`) => `object`

Defined in: [src/providers/proxy/server/types.ts:53](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/types.ts#L53)

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
