---
title: "Function: proxy()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / proxy

# Function: proxy()

> **proxy**(`options`): [`Provider`](../../core/interfaces/provider.md)\<[`ProxyRequestOptions`](../interfaces/proxyrequestoptions.md)\>

Defined in: [src/providers/proxy/index.ts:35](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/proxy/index.ts#L35)

Creates a proxy provider that transports PP requests over HTTP to a backend server.

The proxy acts as a pure transport layer - PP types go in, PP types come out.
The modelId is passed through to the backend, which decides which actual model to use.

## Parameters

### options

[`ProxyProviderOptions`](../interfaces/proxyprovideroptions.md)

Configuration for the proxy endpoint

## Returns

[`Provider`](../../core/interfaces/provider.md)\<[`ProxyRequestOptions`](../interfaces/proxyrequestoptions.md)\>

A provider that can be used with llm()

## Example

```typescript
import { proxy } from './providers/proxy';
import { llm } from './core/llm';

const backend = proxy({ endpoint: '/api/ai' });

const model = llm({
  model: backend('gpt-4o'),
  system: 'You are a helpful assistant.',
});

const turn = await model.generate('Hello!');
```
