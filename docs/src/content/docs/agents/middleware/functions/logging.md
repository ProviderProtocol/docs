---
title: "Function: logging()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [middleware](../index.md) / logging

# Function: logging()

> **logging**(`options`): [`Middleware`](../../core/interfaces/middleware.md)

Defined in: [src/middleware/logging.ts:91](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/middleware/logging.ts#L91)

Creates a logging middleware that records agent execution activity.

This middleware provides comprehensive logging for agent operations including:
- Execution start with agent identification
- Execution completion with optional timing and token usage
- Error conditions with contextual information
- Optional detailed message content (debug level)

## Parameters

### options

[`LoggingOptions`](../../core/interfaces/loggingoptions.md) = `{}`

Configuration options for logging behavior

## Returns

[`Middleware`](../../core/interfaces/middleware.md)

A configured [Middleware](../../core/interfaces/middleware.md) instance

## Examples

Basic usage with default options:
```typescript
import { createAgent } from '@providerprotocol/agents';
import { logging } from '@providerprotocol/agents/middleware';

const agent = createAgent({
  model: anthropic('claude-sonnet-4-20250514'),
  middleware: [logging()],
});
```

Debug logging with message content:
```typescript
const agent = createAgent({
  model: anthropic('claude-sonnet-4-20250514'),
  middleware: [
    logging({
      level: 'debug',
      includeMessages: true,
      includeTiming: true,
    }),
  ],
});
```

Custom logger integration:
```typescript
import pino from 'pino';

const pinoLogger = pino();

const agent = createAgent({
  model: anthropic('claude-sonnet-4-20250514'),
  middleware: [
    logging({
      level: 'info',
      logger: (msg) => pinoLogger.info(msg),
    }),
  ],
});
```

## See

 - [LoggingOptions](../../core/interfaces/loggingoptions.md) for available configuration options
 - [Middleware](../../core/interfaces/middleware.md) for the middleware interface
