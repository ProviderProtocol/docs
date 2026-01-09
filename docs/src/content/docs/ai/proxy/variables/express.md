---
title: "Variable: express"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / express

# Variable: express

> `const` **express**: `object`

Defined in: [src/providers/proxy/server/express.ts:115](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/server/express.ts#L115)

Express adapter utilities.

## Type Declaration

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

## Example

```typescript
import express from 'express';
import { llm, anthropic } from '@providerprotocol/ai';
import { parseBody, bindTools } from '@providerprotocol/ai/proxy';
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
