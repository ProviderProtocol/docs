---
title: "Interface: ReasoningBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ReasoningBlock

# Interface: ReasoningBlock

Defined in: [src/types/content.ts:210](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L210)

Reasoning content block.

Contains model reasoning/thinking from extended thinking or chain-of-thought.
This content represents the model's internal reasoning process.

## Example

```typescript
const reasoningBlock: ReasoningBlock = {
  type: 'reasoning',
  text: 'Let me think about this step by step...'
};
```

## Properties

### text

> **text**: `string`

Defined in: [src/types/content.ts:215](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L215)

The reasoning/thinking text

***

### type

> **type**: `"reasoning"`

Defined in: [src/types/content.ts:212](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L212)

Discriminator for reasoning blocks
