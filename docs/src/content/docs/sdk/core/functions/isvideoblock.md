---
title: "Function: isVideoBlock()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / isVideoBlock

# Function: isVideoBlock()

> **isVideoBlock**(`block`): `block is VideoBlock`

Defined in: [src/types/content.ts:306](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L306)

Type guard for VideoBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/ContentBlock.md)

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
