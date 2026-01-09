---
title: "Variable: fastify"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / fastify

# Variable: fastify

> `const` **fastify**: `object`

Defined in: [src/providers/proxy/server/fastify.ts:122](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/fastify.ts#L122)

Fastify adapter utilities.

## Type Declaration

### sendError()

> **sendError**: (`message`, `status`, `reply`) => `FastifyReply`

Send an error response.

#### Parameters

##### message

`string`

Error message

##### status

`number`

HTTP status code

##### reply

`FastifyReply`

Fastify reply object

#### Returns

`FastifyReply`

### sendJSON()

> **sendJSON**: (`turn`, `reply`) => `FastifyReply`

Send a Turn as JSON response.

#### Parameters

##### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

##### reply

`FastifyReply`

Fastify reply object

#### Returns

`FastifyReply`

#### Example

```typescript
const turn = await instance.generate(messages);
return fastifyAdapter.sendJSON(turn, reply);
```

### streamSSE()

> **streamSSE**: (`stream`, `reply`) => `FastifyReply`

Stream a StreamResult as Server-Sent Events.

#### Parameters

##### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

##### reply

`FastifyReply`

Fastify reply object

#### Returns

`FastifyReply`

#### Example

```typescript
const stream = instance.stream(messages);
return fastifyAdapter.streamSSE(stream, reply);
```

## Example

```typescript
import Fastify from 'fastify';
import { llm, anthropic } from '@providerprotocol/ai';
import { parseBody } from '@providerprotocol/ai/proxy';
import { fastify as fastifyAdapter } from '@providerprotocol/ai/proxy/server';

const app = Fastify();

app.post('/api/ai', async (request, reply) => {
  const { messages, system, params } = parseBody(request.body);
  const instance = llm({ model: anthropic('claude-sonnet-4-20250514'), system });

  if (request.headers.accept?.includes('text/event-stream')) {
    return fastifyAdapter.streamSSE(instance.stream(messages), reply);
  } else {
    const turn = await instance.generate(messages);
    return fastifyAdapter.sendJSON(turn, reply);
  }
});
```
