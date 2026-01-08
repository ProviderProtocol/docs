---
title: "Interface: Middleware"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / Middleware

# Interface: Middleware

Defined in: [src/middleware/types.ts:107](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/middleware/types.ts#L107)

Middleware interface for implementing cross-cutting concerns in agent execution.

Middleware provides hooks into the agent lifecycle, allowing you to:
- Log execution details
- Track metrics and performance
- Modify context before execution
- Transform results after execution
- Handle and recover from errors

## Remarks

Middleware executes in a specific order:
- **before**: Runs in registration order (first registered runs first)
- **after**: Runs in reverse registration order (last registered runs first)
- **onError**: Runs in reverse order until one returns a result to recover

This ordering allows outer middleware to wrap inner middleware behavior,
similar to the onion model used in Express/Koa.

## Example

```typescript
const timingMiddleware: Middleware = {
  name: 'timing',

  async before(context) {
    context.metadata.set('startTime', Date.now());
    return context;
  },

  async after(context, result) {
    const startTime = context.metadata.get('startTime') as number;
    console.log(`Execution took ${Date.now() - startTime}ms`);
    return result;
  },

  async onError(context, error) {
    console.error('Agent failed:', error.message);
    // Return undefined to let error propagate
    return undefined;
  },
};
```

## See

 - [MiddlewareContext](MiddlewareContext.md) for the context object passed to hooks
 - logging for a built-in logging middleware implementation

## Properties

### name

> **name**: `string`

Defined in: [src/middleware/types.ts:114](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/middleware/types.ts#L114)

Unique name identifying this middleware.

Used for debugging and logging purposes. Should be descriptive
and unique within the middleware chain.

## Methods

### after()?

> `optional` **after**(`context`, `result`): `Promise`\<[`GenerateResult`](GenerateResult.md)\>

Defined in: [src/middleware/types.ts:161](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/middleware/types.ts#L161)

Hook called after agent execution completes successfully.

Use this to:
- Log execution results
- Transform or enrich the result
- Record metrics (timing, token usage, etc.)
- Clean up resources

#### Parameters

##### context

[`MiddlewareContext`](MiddlewareContext.md)

The execution context (same instance from before hook)

##### result

[`GenerateResult`](GenerateResult.md)

The generation result from the agent

#### Returns

`Promise`\<[`GenerateResult`](GenerateResult.md)\>

The (optionally modified) result

#### Example

```typescript
async after(context, result) {
  const requestId = context.metadata.get('requestId');
  console.log(`[${requestId}] Generated ${result.turn.usage?.totalTokens} tokens`);
  return result;
}
```

***

### before()?

> `optional` **before**(`context`): `Promise`\<`void` \| [`MiddlewareContext`](MiddlewareContext.md)\>

Defined in: [src/middleware/types.ts:137](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/middleware/types.ts#L137)

Hook called before agent execution begins.

Use this to:
- Log or record the incoming request
- Validate or modify the context
- Store timing or tracking data in metadata
- Short-circuit execution by throwing an error

#### Parameters

##### context

[`MiddlewareContext`](MiddlewareContext.md)

The execution context containing agent, input, state, and metadata

#### Returns

`Promise`\<`void` \| [`MiddlewareContext`](MiddlewareContext.md)\>

The (optionally modified) context, or void to pass through unchanged

#### Example

```typescript
async before(context) {
  // Add request ID for tracing
  context.metadata.set('requestId', crypto.randomUUID());
  return context;
}
```

***

### onError()?

> `optional` **onError**(`context`, `error`): `Promise`\<`void` \| [`GenerateResult`](GenerateResult.md)\>

Defined in: [src/middleware/types.ts:192](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/middleware/types.ts#L192)

Hook called when an error occurs during agent execution.

This hook can either:
- Return a `GenerateResult` to recover from the error gracefully
- Return `undefined` (or void) to let the error propagate

#### Parameters

##### context

[`MiddlewareContext`](MiddlewareContext.md)

The execution context at the time of the error

##### error

`Error`

The error that occurred

#### Returns

`Promise`\<`void` \| [`GenerateResult`](GenerateResult.md)\>

A recovery result, or undefined to propagate the error

#### Remarks

Error hooks are called in reverse middleware order. The first middleware
to return a result stops the error propagation and that result is used.

#### Example

```typescript
async onError(context, error) {
  if (error.message.includes('rate limit')) {
    // Log and let it propagate for retry logic
    console.warn('Rate limited, should retry');
    return undefined;
  }
  // For other errors, log details
  console.error('Agent error:', error);
  return undefined;
}
```
