---
title: "Function: toError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toError

# Function: toError()

> **toError**(`message`, `status`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:151](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/proxy/server/webapi.ts#L151)

Create an error Response.

## Parameters

### message

`string`

Error message

### status

`number` = `500`

HTTP status code (default: 500)

## Returns

`Response`

HTTP Response with error body
