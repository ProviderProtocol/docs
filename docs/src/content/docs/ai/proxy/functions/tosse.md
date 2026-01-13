---
title: "Function: toSSE()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toSSE

# Function: toSSE()

> **toSSE**(`stream`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:128](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/proxy/server/webapi.ts#L128)

Create an SSE Response from a StreamResult.

Streams PP StreamEvents as SSE, then sends the final Turn data.

## Parameters

### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

## Returns

`Response`

HTTP Response with SSE body

## Example

```typescript
const stream = instance.stream(messages);
return toSSE(stream);
```
