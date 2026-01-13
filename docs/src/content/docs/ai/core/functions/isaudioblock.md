---
title: "Function: isAudioBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isAudioBlock

# Function: isAudioBlock()

> **isAudioBlock**(`block`): `block is AudioBlock`

Defined in: [src/types/content.ts:414](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L414)

Type guard for AudioBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is AudioBlock`

True if the block is an AudioBlock

## Example

```typescript
if (isAudioBlock(block)) {
  console.log(block.mimeType, block.duration);
}
```
