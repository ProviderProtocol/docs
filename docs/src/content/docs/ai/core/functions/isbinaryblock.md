---
title: "Function: isBinaryBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isBinaryBlock

# Function: isBinaryBlock()

> **isBinaryBlock**(`block`): `block is BinaryBlock`

Defined in: [src/types/content.ts:323](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/content.ts#L323)

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
