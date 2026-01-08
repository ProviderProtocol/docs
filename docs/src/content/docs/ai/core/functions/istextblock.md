---
title: "Function: isTextBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isTextBlock

# Function: isTextBlock()

> **isTextBlock**(`block`): `block is TextBlock`

Defined in: [src/types/content.ts:255](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/content.ts#L255)

Type guard for TextBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is TextBlock`

True if the block is a TextBlock

## Example

```typescript
if (isTextBlock(block)) {
  console.log(block.text);
}
```
