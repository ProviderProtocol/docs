---
title: "Function: isVideoBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isVideoBlock

# Function: isVideoBlock()

> **isVideoBlock**(`block`): `block is VideoBlock`

Defined in: [src/types/content.ts:372](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/content.ts#L372)

Type guard for VideoBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is VideoBlock`

True if the block is a VideoBlock

## Example

```typescript
if (isVideoBlock(block)) {
  console.log(block.mimeType, block.duration);
}
```
