---
title: "Function: isTextBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isTextBlock

# Function: isTextBlock()

> **isTextBlock**(`block`): `block is TextBlock`

Defined in: [src/types/content.ts:255](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/content.ts#L255)

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
