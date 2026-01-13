---
title: "Function: toJSON()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toJSON

# Function: toJSON()

> **toJSON**(`turn`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:108](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/proxy/server/webapi.ts#L108)

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
