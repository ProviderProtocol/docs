---
title: "Function: bindTools()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / bindTools

# Function: bindTools()

> **bindTools**(`schemas`, `implementations`): [`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/providers/proxy/server/webapi.ts:367](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/webapi.ts#L367)

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
