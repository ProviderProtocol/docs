---
title: "Function: isAudioBlock()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / isAudioBlock

# Function: isAudioBlock()

> **isAudioBlock**(`block`): `block is AudioBlock`

Defined in: [src/types/content.ts:289](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L289)

Type guard for AudioBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/ContentBlock.md)

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
