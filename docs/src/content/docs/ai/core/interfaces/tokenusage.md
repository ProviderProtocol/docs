---
title: "Interface: TokenUsage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / TokenUsage

# Interface: TokenUsage

Defined in: [src/types/turn.ts:36](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/turn.ts#L36)

Token usage information for an inference request.

Tracks input and output tokens across all inference cycles,
with optional per-cycle breakdown and cache metrics.

## Example

```typescript
const usage: TokenUsage = {
  inputTokens: 150,
  outputTokens: 50,
  totalTokens: 200,
  cacheReadTokens: 100,
  cacheWriteTokens: 50,
  cycles: [
    { inputTokens: 100, outputTokens: 30, cacheReadTokens: 0, cacheWriteTokens: 50 },
    { inputTokens: 50, outputTokens: 20, cacheReadTokens: 100, cacheWriteTokens: 0 }
  ]
};
```

## Properties

### cacheReadTokens

> **cacheReadTokens**: `number`

Defined in: [src/types/turn.ts:50](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/turn.ts#L50)

Tokens read from cache (cache hits).
Returns 0 for providers that don't support or report cache metrics.

***

### cacheWriteTokens

> **cacheWriteTokens**: `number`

Defined in: [src/types/turn.ts:56](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/turn.ts#L56)

Tokens written to cache (cache misses that were cached).
Only Anthropic reports this metric; returns 0 for other providers.

***

### cycles?

> `optional` **cycles**: `object`[]

Defined in: [src/types/turn.ts:59](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/turn.ts#L59)

Per-cycle token breakdown (if multiple cycles occurred)

#### cacheReadTokens

> **cacheReadTokens**: `number`

#### cacheWriteTokens

> **cacheWriteTokens**: `number`

#### inputTokens

> **inputTokens**: `number`

#### outputTokens

> **outputTokens**: `number`

***

### inputTokens

> **inputTokens**: `number`

Defined in: [src/types/turn.ts:38](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/turn.ts#L38)

Total input tokens across all cycles

***

### outputTokens

> **outputTokens**: `number`

Defined in: [src/types/turn.ts:41](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/turn.ts#L41)

Total output tokens across all cycles

***

### totalTokens

> **totalTokens**: `number`

Defined in: [src/types/turn.ts:44](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/turn.ts#L44)

Sum of input and output tokens
