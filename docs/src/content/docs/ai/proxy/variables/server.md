---
title: "Variable: server"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / server

# Variable: server

> `const` **server**: `object`

Defined in: [src/providers/proxy/server/index.ts:73](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/proxy/server/index.ts#L73)

Server adapters namespace.

Contains framework-specific adapters for Web API, Express, Fastify, and H3.

## Type Declaration

### express

> **express**: `object`

Express/Connect adapter

#### express.sendError()

> **sendError**: (`message`, `status`, `res`) => `void`

Send an error response.

##### Parameters

###### message

`string`

Error message

###### status

`number`

HTTP status code

###### res

`ExpressResponse`

Express response object

##### Returns

`void`

#### express.sendJSON()

> **sendJSON**: (`turn`, `res`) => `void`

Send a Turn as JSON response.

##### Parameters

###### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

###### res

`ExpressResponse`

Express response object

##### Returns

`void`

##### Example

```typescript
const turn = await instance.generate(messages);
expressAdapter.sendJSON(turn, res);
```

#### express.streamSSE()

> **streamSSE**: (`stream`, `res`) => `void`

Stream a StreamResult as Server-Sent Events.

##### Parameters

###### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

###### res

`ExpressResponse`

Express response object

##### Returns

`void`

##### Example

```typescript
const stream = instance.stream(messages);
expressAdapter.streamSSE(stream, res);
```

### fastify

> **fastify**: `object`

Fastify adapter

#### fastify.sendError()

> **sendError**: (`message`, `status`, `reply`) => `FastifyReply`

Send an error response.

##### Parameters

###### message

`string`

Error message

###### status

`number`

HTTP status code

###### reply

`FastifyReply`

Fastify reply object

##### Returns

`FastifyReply`

#### fastify.sendJSON()

> **sendJSON**: (`turn`, `reply`) => `FastifyReply`

Send a Turn as JSON response.

##### Parameters

###### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

###### reply

`FastifyReply`

Fastify reply object

##### Returns

`FastifyReply`

##### Example

```typescript
const turn = await instance.generate(messages);
return fastifyAdapter.sendJSON(turn, reply);
```

#### fastify.streamSSE()

> **streamSSE**: (`stream`, `reply`) => `FastifyReply`

Stream a StreamResult as Server-Sent Events.

##### Parameters

###### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

###### reply

`FastifyReply`

Fastify reply object

##### Returns

`FastifyReply`

##### Example

```typescript
const stream = instance.stream(messages);
return fastifyAdapter.streamSSE(stream, reply);
```

### h3

> **h3**: `object`

H3/Nitro/Nuxt adapter

#### h3.createSSEStream()

> **createSSEStream**: (`stream`) => `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Create a ReadableStream for H3's sendStream utility.

Use this with H3's sendStream for better integration:
```typescript
import { sendStream } from 'h3';
return sendStream(event, h3Adapter.createSSEStream(stream));
```

##### Parameters

###### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

##### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A ReadableStream of SSE data

#### h3.sendError()

> **sendError**: (`message`, `status`, `event`) => `object`

Send an error response.

##### Parameters

###### message

`string`

Error message

###### status

`number`

HTTP status code

###### event

`H3Event`

H3 event object

##### Returns

`object`

Error object for H3 to serialize

###### error

> **error**: `string`

###### statusCode

> **statusCode**: `number`

#### h3.sendJSON()

> **sendJSON**: (`turn`, `event`) => `unknown`

Send a Turn as JSON response.

##### Parameters

###### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

###### event

`H3Event`

H3 event object

##### Returns

`unknown`

Serialized turn data

##### Example

```typescript
const turn = await instance.generate(messages);
return h3Adapter.sendJSON(turn, event);
```

#### h3.streamSSE()

> **streamSSE**: (`stream`, `event`) => `void`

Stream a StreamResult as Server-Sent Events.

##### Parameters

###### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

###### event

`H3Event`

H3 event object

##### Returns

`void`

##### Example

```typescript
const stream = instance.stream(messages);
return h3Adapter.streamSSE(stream, event);
```

### webapi

> **webapi**: `object`

Web API adapter (Bun, Deno, Next.js, Workers)

#### webapi.bindTools()

> **bindTools**: (`schemas`, `implementations`) => [`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Bind tool schemas to implementation functions.

Takes tool schemas from the request and binds them to your
server-side implementations.

##### Parameters

###### schemas

Tool schemas from the request

`object`[] | `undefined`

###### implementations

`Record`\<`string`, (`params`) => `unknown` \| `Promise`\<`unknown`\>\>

Map of tool name to implementation

##### Returns

[`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Array of complete Tool objects

##### Example

```typescript
const { tools: schemas } = parseBody(body);

const tools = bindTools(schemas, {
  get_weather: async ({ location }) => fetchWeather(location),
  search: async ({ query }) => searchDB(query),
});

const instance = llm({ model, tools });
```

#### webapi.parseBody()

> **parseBody**: (`body`) => [`ParsedRequest`](../interfaces/parsedrequest.md)

Parse an HTTP request body into PP types.

##### Parameters

###### body

`unknown`

The JSON-parsed request body

##### Returns

[`ParsedRequest`](../interfaces/parsedrequest.md)

Deserialized PP data

##### Example

```typescript
const body = await req.json();
const { messages, system, params } = parseBody(body);

const instance = llm({ model: anthropic('...'), system, params });
const turn = await instance.generate(messages);
```

#### webapi.toError()

> **toError**: (`message`, `status`) => `Response`

Create an error Response.

##### Parameters

###### message

`string`

Error message

###### status

`number` = `500`

HTTP status code (default: 500)

##### Returns

`Response`

HTTP Response with error body

#### webapi.toJSON()

> **toJSON**: (`turn`) => `Response`

Create a JSON Response from a Turn.

##### Parameters

###### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

##### Returns

`Response`

HTTP Response with JSON body

##### Example

```typescript
const turn = await instance.generate(messages);
return toJSON(turn);
```

#### webapi.toSSE()

> **toSSE**: (`stream`) => `Response`

Create an SSE Response from a StreamResult.

Streams PP StreamEvents as SSE, then sends the final Turn data.

##### Parameters

###### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

##### Returns

`Response`

HTTP Response with SSE body

##### Example

```typescript
const stream = instance.stream(messages);
return toSSE(stream);
```

## Examples

```typescript
import { express } from '@providerprotocol/ai/proxy/server';

app.post('/api/ai', async (req, res) => {
  const { messages } = parseBody(req.body);
  if (req.headers.accept?.includes('text/event-stream')) {
    express.streamSSE(instance.stream(messages), res);
  } else {
    express.sendJSON(await instance.generate(messages), res);
  }
});
```

```typescript
import { fastify } from '@providerprotocol/ai/proxy/server';

app.post('/api/ai', async (request, reply) => {
  const { messages } = parseBody(request.body);
  if (request.headers.accept?.includes('text/event-stream')) {
    return fastify.streamSSE(instance.stream(messages), reply);
  }
  return fastify.sendJSON(await instance.generate(messages), reply);
});
```

```typescript
import { h3 } from '@providerprotocol/ai/proxy/server';

export default defineEventHandler(async (event) => {
  const { messages } = parseBody(await readBody(event));
  if (getHeader(event, 'accept')?.includes('text/event-stream')) {
    return h3.streamSSE(instance.stream(messages), event);
  }
  return h3.sendJSON(await instance.generate(messages), event);
});
```
