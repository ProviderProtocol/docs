---
title: "Function: isAudioBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isAudioBlock

# Function: isAudioBlock()

> **isAudioBlock**(`block`): `block is AudioBlock`

Defined in: [src/types/content.ts:289](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/content.ts#L289)

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
