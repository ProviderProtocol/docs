---
title: "Class: NoRetry"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / NoRetry

# Class: NoRetry

Defined in: [src/http/retry.ts:218](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/http/retry.ts#L218)

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

- [`RetryStrategy`](../interfaces/retrystrategy.md)

## Constructors

### Constructor

> **new NoRetry**(): `NoRetry`

#### Returns

`NoRetry`

## Methods

### onRetry()

> **onRetry**(): `null`

Defined in: [src/http/retry.ts:224](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/http/retry.ts#L224)

Always returns null to indicate no retry should be attempted.

#### Returns

`null`

Always returns null

#### Implementation of

[`RetryStrategy`](../interfaces/retrystrategy.md).[`onRetry`](../interfaces/retrystrategy.md#onretry)
