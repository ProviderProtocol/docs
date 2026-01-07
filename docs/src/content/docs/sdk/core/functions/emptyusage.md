---
title: "Function: emptyUsage()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / emptyUsage

# Function: emptyUsage()

> **emptyUsage**(): [`TokenUsage`](../interfaces/TokenUsage.md)

Defined in: [src/types/turn.ts:155](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L155)

Creates an empty TokenUsage object.

## Returns

[`TokenUsage`](../interfaces/TokenUsage.md)

A TokenUsage with all values set to zero

## Example

```typescript
const usage = emptyUsage();
// { inputTokens: 0, outputTokens: 0, totalTokens: 0, cycles: [] }
```
