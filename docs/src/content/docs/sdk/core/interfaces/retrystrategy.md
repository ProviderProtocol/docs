---
title: "Interface: RetryStrategy"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / RetryStrategy

# Interface: RetryStrategy

Defined in: [src/types/provider.ts:65](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L65)

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

Defined in: [src/types/provider.ts:80](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L80)

Called before each request. Can be used to implement pre-emptive rate limiting.

#### Returns

`number` \| `Promise`\<`number`\>

Delay in ms to wait before making the request, or 0 to proceed immediately

***

### onRetry()

> **onRetry**(`error`, `attempt`): `number` \| `Promise`\<`number` \| `null`\> \| `null`

Defined in: [src/types/provider.ts:73](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L73)

Called when a request fails with a retryable error.

#### Parameters

##### error

[`UPPError`](../classes/UPPError.md)

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

Defined in: [src/types/provider.ts:85](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L85)

Reset the strategy state (e.g., after a successful request).

#### Returns

`void`
