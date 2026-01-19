---
title: "Function: loggingMiddleware()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / loggingMiddleware

# Function: loggingMiddleware()

> **loggingMiddleware**(`options`): [`Middleware`](../interfaces/middleware.md)

Defined in: [src/middleware/logging.ts:86](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/logging.ts#L86)

Creates a logging middleware for visibility into request lifecycle.

This middleware logs the start, end, and errors of requests,
with optional logging of stream events and tool calls.

## Parameters

### options

[`LoggingOptions`](../interfaces/loggingoptions.md) = `{}`

Configuration options

## Returns

[`Middleware`](../interfaces/middleware.md)

A middleware that logs request lifecycle events

## Example

```typescript
import { llm, loggingMiddleware } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';

const model = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  middleware: [loggingMiddleware({ level: 'debug' })],
});

// Logs: [PP] [anthropic] Starting llm request (streaming)
// Logs: [PP] [anthropic] Completed in 1234ms
const result = await model.generate('Hello');
```
