---
title: "Class: LinearBackoff"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LinearBackoff

# Class: LinearBackoff

Defined in: [src/http/retry.ts:145](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/http/retry.ts#L145)

Implements linear backoff where delays increase proportionally with each attempt.

Unlike exponential backoff, linear backoff increases delays at a constant rate:
- Attempt 1: delay * 1 (e.g., 1000ms)
- Attempt 2: delay * 2 (e.g., 2000ms)
- Attempt 3: delay * 3 (e.g., 3000ms)

This strategy is simpler and more predictable than exponential backoff,
suitable for scenarios where gradual delay increase is preferred over
aggressive backoff.

Only retries on transient errors: RATE_LIMITED, NETWORK_ERROR, TIMEOUT, PROVIDER_ERROR

## Implements

## Example

```typescript
// Default configuration (3 retries, 1s delay increment)
const retry = new LinearBackoff();

// Custom configuration
const customRetry = new LinearBackoff({
  maxAttempts: 4,  // Up to 4 retry attempts
  delay: 2000      // 2s, 4s, 6s, 8s delays
});

// Use with provider
const provider = createAnthropic({
  retryStrategy: customRetry
});
```

## Implements

- [`RetryStrategy`](../interfaces/retrystrategy.md)

## Constructors

### Constructor

> **new LinearBackoff**(`options`): `LinearBackoff`

Defined in: [src/http/retry.ts:156](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/http/retry.ts#L156)

Creates a new LinearBackoff instance.

#### Parameters

##### options

Configuration options

###### delay?

`number`

Base delay multiplier in milliseconds (default: 1000)

###### maxAttempts?

`number`

Maximum number of retry attempts (default: 3)

#### Returns

`LinearBackoff`

## Methods

### onRetry()

> **onRetry**(`error`, `attempt`): `number` \| `null`

Defined in: [src/http/retry.ts:171](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/http/retry.ts#L171)

Determines whether to retry and calculates the linear delay.

#### Parameters

##### error

[`UPPError`](upperror.md)

The error that triggered the retry

##### attempt

`number`

Current attempt number (1-indexed)

#### Returns

`number` \| `null`

Delay in milliseconds (delay * attempt), or null to stop retrying

#### Implementation of

[`RetryStrategy`](../interfaces/retrystrategy.md).[`onRetry`](../interfaces/retrystrategy.md#onretry)
