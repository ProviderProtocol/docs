---
title: "Class: ExponentialBackoff"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ExponentialBackoff

# Class: ExponentialBackoff

Defined in: [src/http/retry.ts:43](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/http/retry.ts#L43)

Implements exponential backoff with optional jitter for retry delays.

The delay between retries doubles with each attempt, helping to:
- Avoid overwhelming servers during outages
- Reduce thundering herd effects when many clients retry simultaneously
- Give transient issues time to resolve

Delay formula: min(baseDelay * 2^(attempt-1), maxDelay)
With jitter: delay * random(0.5, 1.0)

Only retries on transient errors: RATE_LIMITED, NETWORK_ERROR, TIMEOUT, PROVIDER_ERROR

## Implements

## Example

```typescript
// Default configuration (3 retries, 1s base, 30s max, jitter enabled)
const retry = new ExponentialBackoff();

// Custom configuration
const customRetry = new ExponentialBackoff({
  maxAttempts: 5,     // Up to 5 retry attempts
  baseDelay: 500,     // Start with 500ms delay
  maxDelay: 60000,    // Cap at 60 seconds
  jitter: false       // Disable random jitter
});

// Use with provider
const provider = createOpenAI({
  retryStrategy: customRetry
});
```

## Implements

- [`RetryStrategy`](../interfaces/retrystrategy.md)

## Constructors

### Constructor

> **new ExponentialBackoff**(`options`): `ExponentialBackoff`

Defined in: [src/http/retry.ts:58](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/http/retry.ts#L58)

Creates a new ExponentialBackoff instance.

#### Parameters

##### options

Configuration options

###### baseDelay?

`number`

Initial delay in milliseconds (default: 1000)

###### jitter?

`boolean`

Whether to add random jitter to delays (default: true)

###### maxAttempts?

`number`

Maximum number of retry attempts (default: 3)

###### maxDelay?

`number`

Maximum delay cap in milliseconds (default: 30000)

#### Returns

`ExponentialBackoff`

## Methods

### onRetry()

> **onRetry**(`error`, `attempt`): `number` \| `null`

Defined in: [src/http/retry.ts:77](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/http/retry.ts#L77)

Determines whether to retry and calculates the delay.

#### Parameters

##### error

[`UPPError`](upperror.md)

The error that triggered the retry

##### attempt

`number`

Current attempt number (1-indexed)

#### Returns

`number` \| `null`

Delay in milliseconds before next retry, or null to stop retrying

#### Implementation of

[`RetryStrategy`](../interfaces/retrystrategy.md).[`onRetry`](../interfaces/retrystrategy.md#onretry)
