---
title: "Class: TokenBucket"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / TokenBucket

# Class: TokenBucket

Defined in: [src/http/retry.ts:269](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/http/retry.ts#L269)

Implements token bucket rate limiting with automatic refill.

The token bucket algorithm provides smooth rate limiting by:
- Maintaining a bucket of tokens that replenish over time
- Consuming one token per request
- Delaying requests when the bucket is empty
- Allowing burst traffic up to the bucket capacity

This is particularly useful for:
- Client-side rate limiting to avoid hitting API rate limits
- Smoothing request patterns to maintain consistent throughput
- Preventing accidental API abuse

Unlike other retry strategies, TokenBucket implements [beforeRequest](#beforerequest)
to proactively delay requests before they are made.

## Implements

## Example

```typescript
// Allow 10 requests burst, refill 1 token per second
const bucket = new TokenBucket({
  maxTokens: 10,    // Burst capacity
  refillRate: 1,    // Tokens per second
  maxAttempts: 3    // Retry attempts on rate limit
});

// Aggressive rate limiting: 5 req/s sustained
const strictBucket = new TokenBucket({
  maxTokens: 5,
  refillRate: 5
});

// Use with provider
const provider = createOpenAI({
  retryStrategy: bucket
});
```

## Implements

- [`RetryStrategy`](../interfaces/retrystrategy.md)

## Constructors

### Constructor

> **new TokenBucket**(`options`): `TokenBucket`

Defined in: [src/http/retry.ts:284](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/http/retry.ts#L284)

Creates a new TokenBucket instance.

#### Parameters

##### options

Configuration options

###### maxAttempts?

`number`

Maximum retry attempts on rate limit (default: 3)

###### maxTokens?

`number`

Maximum bucket capacity (default: 10)

###### refillRate?

`number`

Tokens added per second (default: 1)

#### Returns

`TokenBucket`

## Methods

### beforeRequest()

> **beforeRequest**(): `number`

Defined in: [src/http/retry.ts:305](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/http/retry.ts#L305)

Called before each request to consume a token or calculate wait time.

Refills the bucket based on elapsed time, then either:
- Returns 0 if a token is available (consumed immediately)
- Returns the wait time in milliseconds until the next token

#### Returns

`number`

Delay in milliseconds before the request can proceed

#### Implementation of

[`RetryStrategy`](../interfaces/retrystrategy.md).[`beforeRequest`](../interfaces/retrystrategy.md#beforerequest)

***

### onRetry()

> **onRetry**(`error`, `attempt`): `number` \| `null`

Defined in: [src/http/retry.ts:326](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/http/retry.ts#L326)

Handles retry logic for rate-limited requests.

Only retries on RATE_LIMITED errors, waiting for bucket refill.

#### Parameters

##### error

[`UPPError`](upperror.md)

The error that triggered the retry

##### attempt

`number`

Current attempt number (1-indexed)

#### Returns

`number` \| `null`

Delay in milliseconds (time for 2 tokens), or null to stop

#### Implementation of

[`RetryStrategy`](../interfaces/retrystrategy.md).[`onRetry`](../interfaces/retrystrategy.md#onretry)

***

### reset()

> **reset**(): `void`

Defined in: [src/http/retry.ts:344](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/http/retry.ts#L344)

Resets the bucket to full capacity.

Called automatically on successful requests to restore available tokens.

#### Returns

`void`

#### Implementation of

[`RetryStrategy`](../interfaces/retrystrategy.md).[`reset`](../interfaces/retrystrategy.md#reset)
