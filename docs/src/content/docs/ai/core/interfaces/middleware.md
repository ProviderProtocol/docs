---
title: "Interface: Middleware"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Middleware

# Interface: Middleware

Defined in: [src/types/middleware.ts:138](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L138)

Middleware interface with optional hooks.

Implement only the hooks you need. Middleware are executed in array order
for request/start hooks, and reverse order for response/end hooks.

## Example

```typescript
import { type Middleware, StreamEventType } from '@providerprotocol/ai';

const customMiddleware: Middleware = {
  name: 'request-id',

  onRequest(ctx) {
    ctx.state.set('requestId', crypto.randomUUID());
  },

  onStreamEvent(event, ctx) {
    // Filter out reasoning events
    if (event.type === StreamEventType.ReasoningDelta) {
      return null;
    }
    return event;
  },

  onEnd(ctx) {
    const duration = ctx.endTime! - ctx.startTime;
    console.log(`Request ${ctx.state.get('requestId')} took ${duration}ms`);
  },
};
```

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/types/middleware.ts:140](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L140)

Middleware name for debugging and logging

## Methods

### onEnd()?

> `optional` **onEnd**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:157](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L157)

Called when generate/stream completes successfully.
Called in reverse middleware order.

#### Parameters

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context with response populated

#### Returns

`void` \| `Promise`\<`void`\>

***

### onError()?

> `optional` **onError**(`error`, `ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:166](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L166)

Called on any error during execution.
Called for all middleware that have this hook, regardless of order.

#### Parameters

##### error

`Error`

The error that occurred

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onRequest()?

> `optional` **onRequest**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:175](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L175)

Called before provider execution. Can modify the request.

#### Parameters

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context with mutable request

#### Returns

`void` \| `Promise`\<`void`\>

***

### onResponse()?

> `optional` **onResponse**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:183](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L183)

Called after provider execution. Can modify the response.
Called in reverse middleware order.

#### Parameters

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context with mutable response

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStart()?

> `optional` **onStart**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:149](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L149)

Called when generate/stream starts, before any provider execution.

#### Parameters

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStreamEnd()?

> `optional` **onStreamEnd**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:206](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L206)

Called when stream completes, after all events have been processed.

#### Parameters

##### ctx

[`StreamContext`](streamcontext.md)

The stream context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStreamEvent()?

> `optional` **onStreamEvent**(`event`, `ctx`): [`StreamEvent`](streamevent.md) \| [`StreamEvent`](streamevent.md)[] \| `null`

Defined in: [src/types/middleware.ts:199](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L199)

Called for each stream event. Can transform, filter, or expand events.

Return values:
- `StreamEvent` - Pass through (potentially modified)
- `StreamEvent[]` - Expand into multiple events
- `null` - Filter out this event

#### Parameters

##### event

[`StreamEvent`](streamevent.md)

The stream event to process

##### ctx

[`StreamContext`](streamcontext.md)

The stream context

#### Returns

[`StreamEvent`](streamevent.md) \| [`StreamEvent`](streamevent.md)[] \| `null`

Transformed event(s) or null to filter

***

### onToolCall()?

> `optional` **onToolCall**(`tool`, `params`, `ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:217](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L217)

Called when a tool is about to be executed.

#### Parameters

##### tool

[`Tool`](tool.md)

The tool being called

##### params

`unknown`

The parameters for the tool call

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onToolResult()?

> `optional` **onToolResult**(`tool`, `result`, `ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:226](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L226)

Called after tool execution completes.

#### Parameters

##### tool

[`Tool`](tool.md)

The tool that was executed

##### result

`unknown`

The result from the tool

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>
