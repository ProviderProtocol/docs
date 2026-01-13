---
title: "Variable: server"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / server

# Variable: server

> `const` **server**: `object`

Defined in: [src/providers/proxy/server/index.ts:96](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/index.ts#L96)

Server adapters namespace.

Contains framework-specific adapters for Web API, Express, Fastify, and H3.

## Type Declaration

### express

> **express**: `object`

Express/Connect adapter

#### express.sendEmbeddingJSON()

> **sendEmbeddingJSON**: (`result`, `res`) => `void`

Send an EmbeddingResult as JSON response.

##### Parameters

###### result

[`EmbeddingResult`](../../core/interfaces/embeddingresult.md)

The embedding result

###### res

`ExpressResponse`

Express response object

##### Returns

`void`

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

#### express.sendImageJSON()

> **sendImageJSON**: (`result`, `res`) => `void`

Send an ImageResult as JSON response.

##### Parameters

###### result

[`ImageResult`](../../core/interfaces/imageresult.md)

The image result

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

#### express.streamImageSSE()

> **streamImageSSE**: (`stream`, `res`) => `void`

Stream an ImageStreamResult as Server-Sent Events.

##### Parameters

###### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

###### res

`ExpressResponse`

Express response object

##### Returns

`void`

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

#### fastify.sendEmbeddingJSON()

> **sendEmbeddingJSON**: (`result`, `reply`) => `FastifyReply`

Send an EmbeddingResult as JSON response.

##### Parameters

###### result

[`EmbeddingResult`](../../core/interfaces/embeddingresult.md)

The embedding result

###### reply

`FastifyReply`

Fastify reply object

##### Returns

`FastifyReply`

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

#### fastify.sendImageJSON()

> **sendImageJSON**: (`result`, `reply`) => `FastifyReply`

Send an ImageResult as JSON response.

##### Parameters

###### result

[`ImageResult`](../../core/interfaces/imageresult.md)

The image result

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

#### fastify.streamImageSSE()

> **streamImageSSE**: (`stream`, `reply`) => `FastifyReply`

Stream an ImageStreamResult as Server-Sent Events.

##### Parameters

###### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

###### reply

`FastifyReply`

Fastify reply object

##### Returns

`FastifyReply`

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

#### h3.createImageSSEStream()

> **createImageSSEStream**: (`stream`) => `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Create a ReadableStream for image SSE data.

##### Parameters

###### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

##### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A ReadableStream of SSE data

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

#### h3.sendEmbeddingJSON()

> **sendEmbeddingJSON**: (`result`, `event`) => `unknown`

Send an EmbeddingResult as JSON response.

##### Parameters

###### result

[`EmbeddingResult`](../../core/interfaces/embeddingresult.md)

The embedding result

###### event

`H3Event`

H3 event object

##### Returns

`unknown`

Serialized result data

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

#### h3.sendImageJSON()

> **sendImageJSON**: (`result`, `event`) => `unknown`

Send an ImageResult as JSON response.

##### Parameters

###### result

[`ImageResult`](../../core/interfaces/imageresult.md)

The image result

###### event

`H3Event`

H3 event object

##### Returns

`unknown`

Serialized image result data

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

#### h3.streamImageSSE()

> **streamImageSSE**: (`stream`, `event`) => `void`

Stream an ImageStreamResult as Server-Sent Events.

##### Parameters

###### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

###### event

`H3Event`

H3 event object

##### Returns

`void`

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

#### webapi.parseEmbeddingBody()

> **parseEmbeddingBody**: (`body`) => [`ParsedEmbeddingRequest`](../interfaces/parsedembeddingrequest.md)

Parse an HTTP request body into embedding inputs.

##### Parameters

###### body

`unknown`

The JSON-parsed request body

##### Returns

[`ParsedEmbeddingRequest`](../interfaces/parsedembeddingrequest.md)

Parsed embedding request data

#### webapi.parseImageBody()

> **parseImageBody**: (`body`) => [`ParsedImageRequest`](../interfaces/parsedimagerequest.md)

Parse an HTTP request body into image request data.

##### Parameters

###### body

`unknown`

The JSON-parsed request body

##### Returns

[`ParsedImageRequest`](../interfaces/parsedimagerequest.md)

Parsed image request data

#### webapi.toEmbeddingJSON()

> **toEmbeddingJSON**: (`result`) => `Response`

Create a JSON Response from an embedding result.

##### Parameters

###### result

[`EmbeddingResult`](../../core/interfaces/embeddingresult.md)

The embedding result

##### Returns

`Response`

HTTP Response with JSON body

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

#### webapi.toImageJSON()

> **toImageJSON**: (`result`) => `Response`

Create a JSON Response from an image result.

##### Parameters

###### result

[`ImageResult`](../../core/interfaces/imageresult.md)

The image result

##### Returns

`Response`

HTTP Response with JSON body

#### webapi.toImageSSE()

> **toImageSSE**: (`stream`) => `Response`

Create an SSE Response from an ImageStreamResult.

Streams image events as SSE, then sends the final image result.

##### Parameters

###### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

##### Returns

`Response`

HTTP Response with SSE body

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
