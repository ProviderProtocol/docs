---
title: "Variable: webapi"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / webapi

# Variable: webapi

> `const` **webapi**: `object`

Defined in: [src/providers/proxy/server/webapi.ts:452](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/proxy/server/webapi.ts#L452)

Web API adapter utilities.

For use with Bun, Deno, Next.js App Router, Cloudflare Workers,
and other frameworks that support Web API Response.

**Security Note:** The proxy works without configuration, meaning no
authentication by default. Always add your own auth layer in production.

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

### parseEmbeddingBody()

> **parseEmbeddingBody**: (`body`) => [`ParsedEmbeddingRequest`](../interfaces/parsedembeddingrequest.md)

Parse an HTTP request body into embedding inputs.

#### Parameters

##### body

`unknown`

The JSON-parsed request body

#### Returns

[`ParsedEmbeddingRequest`](../interfaces/parsedembeddingrequest.md)

Parsed embedding request data

### parseImageBody()

> **parseImageBody**: (`body`) => [`ParsedImageRequest`](../interfaces/parsedimagerequest.md)

Parse an HTTP request body into image request data.

#### Parameters

##### body

`unknown`

The JSON-parsed request body

#### Returns

[`ParsedImageRequest`](../interfaces/parsedimagerequest.md)

Parsed image request data

### toEmbeddingJSON()

> **toEmbeddingJSON**: (`result`) => `Response`

Create a JSON Response from an embedding result.

#### Parameters

##### result

[`EmbeddingResult`](../../core/interfaces/embeddingresult.md)

The embedding result

#### Returns

`Response`

HTTP Response with JSON body

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

### toImageJSON()

> **toImageJSON**: (`result`) => `Response`

Create a JSON Response from an image result.

#### Parameters

##### result

[`ImageResult`](../../core/interfaces/imageresult.md)

The image result

#### Returns

`Response`

HTTP Response with JSON body

### toImageSSE()

> **toImageSSE**: (`stream`) => `Response`

Create an SSE Response from an ImageStreamResult.

Streams image events as SSE, then sends the final image result.

#### Parameters

##### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

#### Returns

`Response`

HTTP Response with SSE body

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

## Examples

```typescript
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
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

```typescript
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { ExponentialBackoff, RoundRobinKeys } from '@providerprotocol/ai/http';
import { parseBody, toJSON, toSSE, toError } from '@providerprotocol/ai/proxy';

// Your platform's user validation
async function validateToken(token: string): Promise<{ id: string } | null> {
  // Verify JWT, check database, etc.
  return token ? { id: 'user-123' } : null;
}

// Server manages AI provider keys - users never see them
const claude = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  config: {
    apiKey: new RoundRobinKeys([process.env.ANTHROPIC_KEY_1!, process.env.ANTHROPIC_KEY_2!]),
    retryStrategy: new ExponentialBackoff({ maxAttempts: 3 }),
  },
});

Bun.serve({
  port: 3000,
  async fetch(req) {
    // Authenticate with YOUR platform credentials
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');
    const user = await validateToken(token ?? '');
    if (!user) return toError('Unauthorized', 401);

    // Rate limit, track usage, bill user, etc.
    // await trackUsage(user.id);

    const { messages, system, params } = parseBody(await req.json());

    if (params?.stream) {
      return toSSE(claude.stream(messages, { system }));
    }
    return toJSON(await claude.generate(messages, { system }));
  },
});
```
