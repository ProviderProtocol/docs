---
title: "Variable: webapi"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / webapi

# Variable: webapi

> `const` **webapi**: `object`

Defined in: [src/providers/proxy/server/webapi.ts:218](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/webapi.ts#L218)

Web API adapter utilities.

For use with Bun, Deno, Next.js App Router, Cloudflare Workers,
and other frameworks that support Web API Response.

## Type Declaration

### bindTools()

> **bindTools**: (`schemas`, `implementations`) => [`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Bind tool schemas to implementation functions.

Takes tool schemas from the request and binds them to your
server-side implementations.

#### Parameters

##### schemas

Tool schemas from the request

`object`[] | `undefined`

##### implementations

`Record`\<`string`, (`params`) => `unknown` \| `Promise`\<`unknown`\>\>

Map of tool name to implementation

#### Returns

[`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Array of complete Tool objects

#### Example

```typescript
const { tools: schemas } = parseBody(body);

const tools = bindTools(schemas, {
  get_weather: async ({ location }) => fetchWeather(location),
  search: async ({ query }) => searchDB(query),
});

const instance = llm({ model, tools });
```

### parseBody()

> **parseBody**: (`body`) => [`ParsedRequest`](../interfaces/parsedrequest.md)

Parse an HTTP request body into PP types.

#### Parameters

##### body

`unknown`

The JSON-parsed request body

#### Returns

[`ParsedRequest`](../interfaces/parsedrequest.md)

Deserialized PP data

#### Example

```typescript
const body = await req.json();
const { messages, system, params } = parseBody(body);

const instance = llm({ model: anthropic('...'), system, params });
const turn = await instance.generate(messages);
```

### toError()

> **toError**: (`message`, `status`) => `Response`

Create an error Response.

#### Parameters

##### message

`string`

Error message

##### status

`number` = `500`

HTTP status code (default: 500)

#### Returns

`Response`

HTTP Response with error body

### toJSON()

> **toJSON**: (`turn`) => `Response`

Create a JSON Response from a Turn.

#### Parameters

##### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

#### Returns

`Response`

HTTP Response with JSON body

#### Example

```typescript
const turn = await instance.generate(messages);
return toJSON(turn);
```

### toSSE()

> **toSSE**: (`stream`) => `Response`

Create an SSE Response from a StreamResult.

Streams PP StreamEvents as SSE, then sends the final Turn data.

#### Parameters

##### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

#### Returns

`Response`

HTTP Response with SSE body

#### Example

```typescript
const stream = instance.stream(messages);
return toSSE(stream);
```

## Example

```typescript
import { llm, anthropic } from '@providerprotocol/ai';
import { parseBody, toJSON, toSSE } from '@providerprotocol/ai/proxy';

// Bun.serve / Deno.serve / Next.js App Router
export async function POST(req: Request) {
  const { messages, system } = parseBody(await req.json());
  const instance = llm({ model: anthropic('claude-sonnet-4-20250514'), system });

  if (req.headers.get('accept')?.includes('text/event-stream')) {
    return toSSE(instance.stream(messages));
  }
  return toJSON(await instance.generate(messages));
}
```
