---
title: "Function: parsedObjectMiddleware()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / parsedObjectMiddleware

# Function: parsedObjectMiddleware()

> **parsedObjectMiddleware**(`options`): [`Middleware`](../interfaces/middleware.md)

Defined in: [src/middleware/parsed-object.ts:108](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/parsed-object.ts#L108)

Middleware exports for composable request/response/stream transformations.

## Parameters

### options

[`ParsedObjectOptions`](../interfaces/parsedobjectoptions.md) = `{}`

## Returns

[`Middleware`](../interfaces/middleware.md)

## Example

```typescript
import { llm, parsedObjectMiddleware, loggingMiddleware } from '@providerprotocol/ai';

const model = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  structure: mySchema,
  middleware: [
    loggingMiddleware(),
    parsedObjectMiddleware(),
  ],
});
```
