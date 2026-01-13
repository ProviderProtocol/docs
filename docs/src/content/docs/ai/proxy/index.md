---
title: "proxy"
---

[**@providerprotocol/ai**](../index.md)

***

[@providerprotocol/ai](./index.md) / proxy

# proxy

Proxy provider for UPP (Unified Provider Protocol)

This module exports the proxy provider for transporting PP requests
over HTTP to a backend server, plus server-side utilities for
implementing proxy endpoints.

## Examples

```typescript
import { proxy } from '@providerprotocol/ai/proxy';
import { llm } from '@providerprotocol/ai';

const backend = proxy({ endpoint: '/api/ai' });
const instance = llm({ model: backend('default') });

const turn = await instance.generate('Hello!');
```

```typescript
import { llm, anthropic } from '@providerprotocol/ai';
import { parseBody, toJSON, toSSE, toError } from '@providerprotocol/ai/proxy';

Bun.serve({
  async fetch(req) {
    if (req.method === 'POST' && new URL(req.url).pathname === '/api/ai') {
      try {
        const { messages, system, params } = parseBody(await req.json());
        const instance = llm({
          model: anthropic('claude-sonnet-4-20250514'),
          system,
          params: { max_tokens: 4096, ...params },
        });

        const wantsStream = req.headers.get('accept')?.includes('text/event-stream');
        if (wantsStream) {
          return toSSE(instance.stream(messages));
        }
        return toJSON(await instance.generate(messages));
      } catch (e) {
        return toError(e.message, 400);
      }
    }
    return new Response('Not found', { status: 404 });
  }
});
```

## Interfaces

- [AdapterOptions](interfaces/adapteroptions.md)
- [ParsedBody](interfaces/parsedbody.md)
- [ParsedEmbeddingRequest](interfaces/parsedembeddingrequest.md)
- [ParsedImageRequest](interfaces/parsedimagerequest.md)
- [ParsedRequest](interfaces/parsedrequest.md)
- [ProxyEmbeddingParams](interfaces/proxyembeddingparams.md)
- [ProxyImageParams](interfaces/proxyimageparams.md)
- [ProxyLLMParams](interfaces/proxyllmparams.md)
- [ProxyProviderOptions](interfaces/proxyprovideroptions.md)
- [ProxyRequestOptions](interfaces/proxyrequestoptions.md)
- [RequestMeta](interfaces/requestmeta.md)

## Type Aliases

- [ProxyHandler](type-aliases/proxyhandler.md)
- [TurnJSON](type-aliases/turnjson.md)

## Variables

- [express](variables/express.md)
- [fastify](variables/fastify.md)
- [h3](variables/h3.md)
- [server](variables/server.md)
- [webapi](variables/webapi.md)

## Functions

- [bindTools](functions/bindtools.md)
- [deserializeMessage](functions/deserializemessage.md)
- [deserializeStreamEvent](functions/deserializestreamevent.md)
- [parseBody](functions/parsebody.md)
- [parseEmbeddingBody](functions/parseembeddingbody.md)
- [parseImageBody](functions/parseimagebody.md)
- [proxy](functions/proxy.md)
- [proxyModel](functions/proxymodel.md)
- [serializeMessage](functions/serializemessage.md)
- [serializeStreamEvent](functions/serializestreamevent.md)
- [serializeTurn](functions/serializeturn.md)
- [toEmbeddingJSON](functions/toembeddingjson.md)
- [toError](functions/toerror.md)
- [toImageJSON](functions/toimagejson.md)
- [toImageSSE](functions/toimagesse.md)
- [toJSON](functions/tojson.md)
- [toSSE](functions/tosse.md)
