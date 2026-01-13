---
title: "Interface: ReasoningBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ReasoningBlock

# Interface: ReasoningBlock

Defined in: [src/types/content.ts:145](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L145)

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

Defined in: [src/types/content.ts:150](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L150)

The reasoning/thinking text

***

### type

> **type**: `"reasoning"`

Defined in: [src/types/content.ts:147](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L147)

Discriminator for reasoning blocks
