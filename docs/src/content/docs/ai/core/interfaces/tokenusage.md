---
title: "Interface: TokenUsage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / TokenUsage

# Interface: TokenUsage

Defined in: [src/types/turn.ts:35](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/turn.ts#L35)

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

Defined in: [src/types/turn.ts:49](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/turn.ts#L49)

Tokens read from cache (cache hits).
Returns 0 for providers that don't support or report cache metrics.

***

### cacheWriteTokens

> **cacheWriteTokens**: `number`

Defined in: [src/types/turn.ts:55](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/turn.ts#L55)

Tokens written to cache (cache misses that were cached).
Only Anthropic reports this metric; returns 0 for other providers.

***

### cycles?

> `optional` **cycles**: `object`[]

Defined in: [src/types/turn.ts:58](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/turn.ts#L58)

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

Defined in: [src/types/turn.ts:37](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/turn.ts#L37)

Total input tokens across all cycles

***

### outputTokens

> **outputTokens**: `number`

Defined in: [src/types/turn.ts:40](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/turn.ts#L40)

Total output tokens across all cycles

***

### totalTokens

> **totalTokens**: `number`

Defined in: [src/types/turn.ts:43](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/turn.ts#L43)

Sum of input and output tokens
