---
title: "Function: isTextBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isTextBlock

# Function: isTextBlock()

> **isTextBlock**(`block`): `block is TextBlock`

Defined in: [src/types/content.ts:255](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/content.ts#L255)

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
