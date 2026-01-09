---
title: "Function: parseBody()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / parseBody

# Function: parseBody()

> **parseBody**(`body`): [`ParsedRequest`](../interfaces/parsedrequest.md)

Defined in: [src/providers/proxy/server/webapi.ts:57](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/webapi.ts#L57)

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
