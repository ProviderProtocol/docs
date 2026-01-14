---
title: "Variable: fastify"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / fastify

# Variable: fastify

> `const` **fastify**: `object`

Defined in: [src/providers/proxy/server/fastify.ts:231](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/fastify.ts#L231)

Fastify adapter utilities.

## Type Declaration

### sendEmbeddingJSON()

> **sendEmbeddingJSON**: (`result`, `reply`) => `FastifyReply`

Send an EmbeddingResult as JSON response.

#### Parameters

##### result

[`EmbeddingResult`](../../core/interfaces/embeddingresult.md)

The embedding result

##### reply

`FastifyReply`

Fastify reply object

#### Returns

`FastifyReply`

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

### sendImageJSON()

> **sendImageJSON**: (`result`, `reply`) => `FastifyReply`

Send an ImageResult as JSON response.

#### Parameters

##### result

[`ImageResult`](../../core/interfaces/imageresult.md)

The image result

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

### streamImageSSE()

> **streamImageSSE**: (`stream`, `reply`) => `FastifyReply`

Stream an ImageStreamResult as Server-Sent Events.

#### Parameters

##### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

##### reply

`FastifyReply`

Fastify reply object

#### Returns

`FastifyReply`

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

## Examples

```typescript
import Fastify from 'fastify';
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
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

```typescript
import Fastify from 'fastify';
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { ExponentialBackoff, RoundRobinKeys } from '@providerprotocol/ai/http';
import { parseBody } from '@providerprotocol/ai/proxy';
import { fastify as fastifyAdapter } from '@providerprotocol/ai/proxy/server';

const app = Fastify();

// Server manages AI provider keys - users never see them
const claude = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  config: {
    apiKey: new RoundRobinKeys([process.env.ANTHROPIC_KEY_1!, process.env.ANTHROPIC_KEY_2!]),
    retryStrategy: new ExponentialBackoff({ maxAttempts: 3 }),
  },
});

// Auth hook for your platform
app.addHook('preHandler', async (request, reply) => {
  const token = request.headers.authorization?.replace('Bearer ', '');
  const user = await validatePlatformToken(token);
  if (!user) {
    reply.status(401).send({ error: 'Unauthorized' });
    return;
  }
  request.user = user;
});

app.post('/api/ai', async (request, reply) => {
  // Track usage per user
  // await trackUsage(request.user.id);

  const { messages, system, params } = parseBody(request.body);

  if (params?.stream) {
    return fastifyAdapter.streamSSE(claude.stream(messages, { system }), reply);
  }
  const turn = await claude.generate(messages, { system });
  return fastifyAdapter.sendJSON(turn, reply);
});
```
