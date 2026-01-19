---
title: "Interface: MiddlewareContext"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MiddlewareContext

# Interface: MiddlewareContext

Defined in: [src/types/middleware.ts:51](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L51)

Shared context passed to all middleware hooks.

Provides access to request/response data, timing information,
and a shared state map for passing data between middleware.

## Example

```typescript
const loggingMiddleware: Middleware = {
  name: 'logging',
  onStart(ctx) {
    ctx.state.set('requestId', crypto.randomUUID());
  },
  onEnd(ctx) {
    const duration = ctx.endTime! - ctx.startTime;
    console.log(`[${ctx.provider}] ${ctx.state.get('requestId')} completed in ${duration}ms`);
  },
};
```

## Properties

### endTime?

> `optional` **endTime**: `number`

Defined in: [src/types/middleware.ts:77](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L77)

Request end timestamp in milliseconds (set after completion)

***

### modality

> `readonly` **modality**: [`MiddlewareModality`](../type-aliases/middlewaremodality.md)

Defined in: [src/types/middleware.ts:53](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L53)

The modality being used

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/middleware.ts:56](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L56)

Model ID

***

### provider

> `readonly` **provider**: `string`

Defined in: [src/types/middleware.ts:59](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L59)

Provider name

***

### request

> **request**: [`AnyRequest`](../type-aliases/anyrequest.md)

Defined in: [src/types/middleware.ts:65](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L65)

Request object (modality-specific, mutable for onRequest hook)

***

### response?

> `optional` **response**: [`AnyResponse`](../type-aliases/anyresponse.md)

Defined in: [src/types/middleware.ts:68](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L68)

Response object (populated after execution, mutable for onResponse hook)

***

### startTime

> `readonly` **startTime**: `number`

Defined in: [src/types/middleware.ts:74](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L74)

Request start timestamp in milliseconds

***

### state

> `readonly` **state**: `Map`\<`string`, `unknown`\>

Defined in: [src/types/middleware.ts:71](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L71)

Shared state across middleware - use for passing data between hooks

***

### streaming

> `readonly` **streaming**: `boolean`

Defined in: [src/types/middleware.ts:62](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/middleware.ts#L62)

Whether this is a streaming request
