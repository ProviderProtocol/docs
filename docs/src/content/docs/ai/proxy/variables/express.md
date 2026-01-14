---
title: "Variable: express"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / express

# Variable: express

> `const` **express**: `object`

Defined in: [src/providers/proxy/server/express.ts:217](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/server/express.ts#L217)

Express adapter utilities.

## Type Declaration

### sendEmbeddingJSON()

> **sendEmbeddingJSON**: (`result`, `res`) => `void`

Send an EmbeddingResult as JSON response.

#### Parameters

##### result

[`EmbeddingResult`](../../core/interfaces/embeddingresult.md)

The embedding result

##### res

`ExpressResponse`

Express response object

#### Returns

`void`

### sendError()

> **sendError**: (`message`, `status`, `res`) => `void`

Send an error response.

#### Parameters

##### message

`string`

Error message

##### status

`number`

HTTP status code

##### res

`ExpressResponse`

Express response object

#### Returns

`void`

### sendImageJSON()

> **sendImageJSON**: (`result`, `res`) => `void`

Send an ImageResult as JSON response.

#### Parameters

##### result

[`ImageResult`](../../core/interfaces/imageresult.md)

The image result

##### res

`ExpressResponse`

Express response object

#### Returns

`void`

### sendJSON()

> **sendJSON**: (`turn`, `res`) => `void`

Send a Turn as JSON response.

#### Parameters

##### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

##### res

`ExpressResponse`

Express response object

#### Returns

`void`

#### Example

```typescript
const turn = await instance.generate(messages);
expressAdapter.sendJSON(turn, res);
```

### streamImageSSE()

> **streamImageSSE**: (`stream`, `res`) => `void`

Stream an ImageStreamResult as Server-Sent Events.

#### Parameters

##### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

##### res

`ExpressResponse`

Express response object

#### Returns

`void`

### streamSSE()

> **streamSSE**: (`stream`, `res`) => `void`

Stream a StreamResult as Server-Sent Events.

#### Parameters

##### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

##### res

`ExpressResponse`

Express response object

#### Returns

`void`

#### Example

```typescript
const stream = instance.stream(messages);
expressAdapter.streamSSE(stream, res);
```

## Examples

```typescript
import express from 'express';
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { parseBody } from '@providerprotocol/ai/proxy';
import { express as expressAdapter } from '@providerprotocol/ai/proxy/server';

const app = express();
app.use(express.json());

app.post('/api/ai', async (req, res) => {
  const { messages, system, params } = parseBody(req.body);
  const instance = llm({ model: anthropic('claude-sonnet-4-20250514'), system });

  if (req.headers.accept?.includes('text/event-stream')) {
    expressAdapter.streamSSE(instance.stream(messages), res);
  } else {
    const turn = await instance.generate(messages);
    expressAdapter.sendJSON(turn, res);
  }
});
```

```typescript
import express from 'express';
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { ExponentialBackoff, RoundRobinKeys } from '@providerprotocol/ai/http';
import { parseBody } from '@providerprotocol/ai/proxy';
import { express as expressAdapter } from '@providerprotocol/ai/proxy/server';

const app = express();
app.use(express.json());

// Your platform's auth middleware
async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const user = await validatePlatformToken(token);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });
  req.user = user;
  next();
}

// Server manages AI provider keys - users never see them
const claude = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  config: {
    apiKey: new RoundRobinKeys([process.env.ANTHROPIC_KEY_1!, process.env.ANTHROPIC_KEY_2!]),
    retryStrategy: new ExponentialBackoff({ maxAttempts: 3 }),
  },
});

app.post('/api/ai', authMiddleware, async (req, res) => {
  // Track usage per user
  // await trackUsage(req.user.id);

  const { messages, system, params } = parseBody(req.body);

  if (params?.stream) {
    expressAdapter.streamSSE(claude.stream(messages, { system }), res);
  } else {
    const turn = await claude.generate(messages, { system });
    expressAdapter.sendJSON(turn, res);
  }
});
```
