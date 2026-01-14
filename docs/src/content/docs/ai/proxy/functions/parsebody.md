---
title: "Function: parseBody()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / parseBody

# Function: parseBody()

> **parseBody**(`body`): [`ParsedRequest`](../interfaces/parsedrequest.md)

Defined in: [src/providers/proxy/server/webapi.ts:90](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L90)

Parse an HTTP request body into PP types.

## Parameters

### body

`unknown`

The JSON-parsed request body

## Returns

[`ParsedRequest`](../interfaces/parsedrequest.md)

Deserialized PP data

## Example

```typescript
const body = await req.json();
const { messages, system, params } = parseBody(body);

const instance = llm({ model: anthropic('...'), system, params });
const turn = await instance.generate(messages);
```
