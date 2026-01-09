---
title: "Function: emptyUsage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / emptyUsage

# Function: emptyUsage()

> **emptyUsage**(): [`TokenUsage`](../interfaces/tokenusage.md)

Defined in: [src/types/turn.ts:180](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/turn.ts#L180)

Creates an empty TokenUsage object.

## Returns

[`TokenUsage`](../interfaces/tokenusage.md)

A TokenUsage with all values set to zero

## Example

```typescript
const usage = emptyUsage();
// { inputTokens: 0, outputTokens: 0, totalTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0, cycles: [] }
```
