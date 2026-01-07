---
title: "Interface: TokenUsage"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / TokenUsage

# Interface: TokenUsage

Defined in: [src/types/turn.ts:33](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L33)

Token usage information for an inference request.

Tracks input and output tokens across all inference cycles,
with optional per-cycle breakdown.

## Example

```typescript
const usage: TokenUsage = {
  inputTokens: 150,
  outputTokens: 50,
  totalTokens: 200,
  cycles: [
    { inputTokens: 100, outputTokens: 30 },
    { inputTokens: 50, outputTokens: 20 }
  ]
};
```

## Properties

### cycles?

> `optional` **cycles**: `object`[]

Defined in: [src/types/turn.ts:44](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L44)

Per-cycle token breakdown (if multiple cycles occurred)

#### inputTokens

> **inputTokens**: `number`

#### outputTokens

> **outputTokens**: `number`

***

### inputTokens

> **inputTokens**: `number`

Defined in: [src/types/turn.ts:35](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L35)

Total input tokens across all cycles

***

### outputTokens

> **outputTokens**: `number`

Defined in: [src/types/turn.ts:38](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L38)

Total output tokens across all cycles

***

### totalTokens

> **totalTokens**: `number`

Defined in: [src/types/turn.ts:41](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/turn.ts#L41)

Sum of input and output tokens
