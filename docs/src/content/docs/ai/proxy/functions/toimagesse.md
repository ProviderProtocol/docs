---
title: "Function: toImageSSE()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toImageSSE

# Function: toImageSSE()

> **toImageSSE**(`stream`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:297](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L297)

Create an SSE Response from an ImageStreamResult.

Streams image events as SSE, then sends the final image result.

## Parameters

### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

## Returns

`Response`

HTTP Response with SSE body
