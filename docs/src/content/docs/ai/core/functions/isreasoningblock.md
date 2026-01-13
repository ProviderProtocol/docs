---
title: "Function: isReasoningBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isReasoningBlock

# Function: isReasoningBlock()

> **isReasoningBlock**(`block`): `block is ReasoningBlock`

Defined in: [src/types/content.ts:380](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L380)

Type guard for ReasoningBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is ReasoningBlock`

True if the block is a ReasoningBlock

## Example

```typescript
if (isReasoningBlock(block)) {
  console.log(block.text);
}
```
