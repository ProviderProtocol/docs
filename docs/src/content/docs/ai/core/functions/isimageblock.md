---
title: "Function: isImageBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isImageBlock

# Function: isImageBlock()

> **isImageBlock**(`block`): `block is ImageBlock`

Defined in: [src/types/content.ts:272](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/content.ts#L272)

Type guard for ImageBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is ImageBlock`

True if the block is an ImageBlock

## Example

```typescript
if (isImageBlock(block)) {
  console.log(block.mimeType, block.width, block.height);
}
```
