---
title: "Function: toJSON()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toJSON

# Function: toJSON()

> **toJSON**(`turn`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:108](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/proxy/server/webapi.ts#L108)

Create a JSON Response from a Turn.

## Parameters

### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

## Returns

`Response`

HTTP Response with JSON body

## Example

```typescript
const turn = await instance.generate(messages);
return toJSON(turn);
```
