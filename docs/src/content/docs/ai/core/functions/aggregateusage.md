---
title: "Function: aggregateUsage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / aggregateUsage

# Function: aggregateUsage()

> **aggregateUsage**(`usages`): [`TokenUsage`](../interfaces/tokenusage.md)

Defined in: [src/types/turn.ts:213](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/turn.ts#L213)

Aggregates token usage from multiple inference cycles.

## Parameters

### usages

[`TokenUsage`](../interfaces/tokenusage.md)[]

Array of TokenUsage objects to aggregate

## Returns

[`TokenUsage`](../interfaces/tokenusage.md)

Combined TokenUsage with per-cycle breakdown

## Example

```typescript
const cycle1 = { inputTokens: 100, outputTokens: 30, totalTokens: 130, cacheReadTokens: 50, cacheWriteTokens: 0 };
const cycle2 = { inputTokens: 150, outputTokens: 40, totalTokens: 190, cacheReadTokens: 100, cacheWriteTokens: 0 };
const total = aggregateUsage([cycle1, cycle2]);
// { inputTokens: 250, outputTokens: 70, totalTokens: 320, cacheReadTokens: 150, cacheWriteTokens: 0, cycles: [...] }
```
