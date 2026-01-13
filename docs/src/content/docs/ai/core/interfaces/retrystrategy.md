---
title: "Interface: RetryStrategy"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / RetryStrategy

# Interface: RetryStrategy

Defined in: [src/types/provider.ts:66](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L66)

Retry strategy interface for handling request failures.

Implement this interface to provide custom retry logic for
handling rate limits, transient errors, and other failures.

## Example

```typescript
class ExponentialBackoff implements RetryStrategy {
  private maxAttempts = 5;
  private baseDelay = 1000;

  onRetry(error: UPPError, attempt: number): number | null {
    if (attempt > this.maxAttempts) return null;
    if (error.code !== 'RATE_LIMITED') return null;
    return this.baseDelay * Math.pow(2, attempt - 1);
  }
}
```

## Methods

### beforeRequest()?

> `optional` **beforeRequest**(): `number` \| `Promise`\<`number`\>

Defined in: [src/types/provider.ts:81](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L81)

Called before each request. Can be used to implement pre-emptive rate limiting.

#### Returns

`number` \| `Promise`\<`number`\>

Delay in ms to wait before making the request, or 0 to proceed immediately

***

### onRetry()

> **onRetry**(`error`, `attempt`): `number` \| `Promise`\<`number` \| `null`\> \| `null`

Defined in: [src/types/provider.ts:74](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L74)

Called when a request fails with a retryable error.

#### Parameters

##### error

[`UPPError`](../classes/upperror.md)

The error that occurred

##### attempt

`number`

The attempt number (1 = first retry)

#### Returns

`number` \| `Promise`\<`number` \| `null`\> \| `null`

Delay in ms before retrying, or null to stop retrying

***

### reset()?

> `optional` **reset**(): `void`

Defined in: [src/types/provider.ts:86](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/provider.ts#L86)

Reset the strategy state (e.g., after a successful request).

#### Returns

`void`
