---
title: "Function: toError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toError

# Function: toError()

> **toError**(`message`, `status`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:170](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/proxy/server/webapi.ts#L170)

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
