---
title: "Function: toJSON()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toJSON

# Function: toJSON()

> **toJSON**(`turn`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:89](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/proxy/server/webapi.ts#L89)

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
