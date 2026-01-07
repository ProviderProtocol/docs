---
title: "Function: aggregateUsage()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / aggregateUsage

# Function: aggregateUsage()

> **aggregateUsage**(`usages`): [`TokenUsage`](../interfaces/TokenUsage.md)

Defined in: [src/types/turn.ts:178](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L178)

Aggregates token usage from multiple inference cycles.

## Parameters

### usages

[`TokenUsage`](../interfaces/TokenUsage.md)[]

Array of TokenUsage objects to aggregate

## Returns

[`TokenUsage`](../interfaces/TokenUsage.md)

Combined TokenUsage with per-cycle breakdown

## Example

```typescript
const cycle1 = { inputTokens: 100, outputTokens: 30, totalTokens: 130 };
const cycle2 = { inputTokens: 150, outputTokens: 40, totalTokens: 190 };
const total = aggregateUsage([cycle1, cycle2]);
// { inputTokens: 250, outputTokens: 70, totalTokens: 320, cycles: [...] }
```
