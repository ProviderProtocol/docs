---
title: "Function: isImageBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isImageBlock

# Function: isImageBlock()

> **isImageBlock**(`block`): `block is ImageBlock`

Defined in: [src/types/content.ts:397](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L397)

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
