---
title: "Function: aggregateUsage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / aggregateUsage

# Function: aggregateUsage()

> **aggregateUsage**(`usages`): [`TokenUsage`](../interfaces/tokenusage.md)

Defined in: [src/types/turn.ts:196](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/turn.ts#L196)

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
