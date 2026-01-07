---
title: "Function: isImageBlock()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / isImageBlock

# Function: isImageBlock()

> **isImageBlock**(`block`): `block is ImageBlock`

Defined in: [src/types/content.ts:272](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L272)

Type guard for ImageBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/ContentBlock.md)

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
