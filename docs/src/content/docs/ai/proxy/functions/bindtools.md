---
title: "Function: bindTools()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / bindTools

# Function: bindTools()

> **bindTools**(`schemas`, `implementations`): [`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/providers/proxy/server/webapi.ts:199](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/proxy/server/webapi.ts#L199)

Bind tool schemas to implementation functions.

Takes tool schemas from the request and binds them to your
server-side implementations.

## Parameters

### schemas

Tool schemas from the request

`object`[] | `undefined`

### implementations

`Record`\<`string`, (`params`) => `unknown` \| `Promise`\<`unknown`\>\>

Map of tool name to implementation

## Returns

[`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Array of complete Tool objects

## Example

```typescript
const { tools: schemas } = parseBody(body);

const tools = bindTools(schemas, {
  get_weather: async ({ location }) => fetchWeather(location),
  search: async ({ query }) => searchDB(query),
});

const instance = llm({ model, tools });
```
