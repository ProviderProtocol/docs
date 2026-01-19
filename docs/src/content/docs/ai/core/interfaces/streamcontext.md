---
title: "Interface: StreamContext"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / StreamContext

# Interface: StreamContext

Defined in: [src/types/middleware.ts:101](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L101)

Context for stream event hooks.

Provides a shared state map for middleware to store and retrieve data.
Middleware that need to accumulate text or other data should manage
their own state using the provided state map.

## Example

```typescript
const filterMiddleware: Middleware = {
  name: 'reasoning-filter',
  onStreamEvent(event, ctx) {
    // Filter out reasoning events
    if (event.type === StreamEventType.ReasoningDelta) {
      return null;
    }
    return event;
  },
};
```

## Properties

### state

> `readonly` **state**: `Map`\<`string`, `unknown`\>

Defined in: [src/types/middleware.ts:103](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L103)

Shared state (same reference as MiddlewareContext.state)
