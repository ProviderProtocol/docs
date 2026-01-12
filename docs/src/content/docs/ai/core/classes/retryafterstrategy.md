---
title: "Class: RetryAfterStrategy"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / RetryAfterStrategy

# Class: RetryAfterStrategy

Defined in: [src/http/retry.ts:395](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/http/retry.ts#L395)

Respects server-provided Retry-After headers for optimal retry timing.

When servers return a 429 (Too Many Requests) response, they often include
a Retry-After header indicating when the client should retry. This strategy
uses that information for precise retry timing.

Benefits over fixed backoff strategies:
- Follows server recommendations for optimal retry timing
- Avoids retrying too early and wasting requests
- Adapts to dynamic rate limit windows

If no Retry-After header is provided, falls back to a configurable delay.
Only retries on RATE_LIMITED errors.

## Implements

## Example

```typescript
// Use server-recommended retry timing
const retryAfter = new RetryAfterStrategy({
  maxAttempts: 5,       // Retry up to 5 times
  fallbackDelay: 10000  // 10s fallback if no header
});

// The doFetch function automatically calls setRetryAfter
// when a Retry-After header is present in the response

const provider = createOpenAI({
  retryStrategy: retryAfter
});
```

## Implements

- [`RetryStrategy`](../interfaces/retrystrategy.md)

## Constructors

### Constructor

> **new RetryAfterStrategy**(`options`): `RetryAfterStrategy`

Defined in: [src/http/retry.ts:407](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/http/retry.ts#L407)

Creates a new RetryAfterStrategy instance.

#### Parameters

##### options

Configuration options

###### fallbackDelay?

`number`

Delay in ms when no Retry-After header (default: 5000)

###### maxAttempts?

`number`

Maximum number of retry attempts (default: 3)

#### Returns

`RetryAfterStrategy`

## Methods

### onRetry()

> **onRetry**(`error`, `attempt`): `number` \| `null`

Defined in: [src/http/retry.ts:434](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/http/retry.ts#L434)

Determines retry delay using Retry-After header or fallback.

#### Parameters

##### error

[`UPPError`](upperror.md)

The error that triggered the retry

##### attempt

`number`

Current attempt number (1-indexed)

#### Returns

`number` \| `null`

Delay from Retry-After header or fallback, null to stop

#### Implementation of

[`RetryStrategy`](../interfaces/retrystrategy.md).[`onRetry`](../interfaces/retrystrategy.md#onretry)

***

### setRetryAfter()

> **setRetryAfter**(`seconds`): `void`

Defined in: [src/http/retry.ts:423](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/http/retry.ts#L423)

Sets the retry delay from a Retry-After header value.

Called by doFetch when a Retry-After header is present in the response.
The value is used for the next onRetry call and then cleared.

#### Parameters

##### seconds

`number`

The Retry-After value in seconds

#### Returns

`void`
