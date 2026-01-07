---
title: "Class: NoRetry"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / NoRetry

# Class: NoRetry

Defined in: [src/http/retry.ts:218](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/retry.ts#L218)

Disables all retry behavior, failing immediately on any error.

Use this strategy when:
- Retries are handled at a higher level in your application
- You want immediate failure feedback
- The operation is not idempotent
- Time sensitivity requires fast failure

## Implements

## Example

```typescript
// Disable retries for time-sensitive operations
const provider = createOpenAI({
  retryStrategy: new NoRetry()
});
```

## Implements

- [`RetryStrategy`](../interfaces/RetryStrategy.md)

## Constructors

### Constructor

> **new NoRetry**(): `NoRetry`

#### Returns

`NoRetry`

## Methods

### onRetry()

> **onRetry**(): `null`

Defined in: [src/http/retry.ts:224](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/http/retry.ts#L224)

Always returns null to indicate no retry should be attempted.

#### Returns

`null`

Always returns null

#### Implementation of

[`RetryStrategy`](../interfaces/RetryStrategy.md).[`onRetry`](../interfaces/RetryStrategy.md#onretry)
