---
title: "Function: isBinaryBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isBinaryBlock

# Function: isBinaryBlock()

> **isBinaryBlock**(`block`): `block is BinaryBlock`

Defined in: [src/types/content.ts:323](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/content.ts#L323)

Type guard for BinaryBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is BinaryBlock`

True if the block is a BinaryBlock

## Example

```typescript
if (isBinaryBlock(block)) {
  console.log(block.mimeType, block.metadata);
}
```
