---
title: "Interface: AudioBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / AudioBlock

# Interface: AudioBlock

Defined in: [src/types/content.ts:201](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L201)

Audio content block.

Contains audio data with its metadata.

## Example

```typescript
const audioBlock: AudioBlock = {
  type: 'audio',
  data: audioBytes,
  mimeType: 'audio/mp3',
  duration: 120.5
};
```

## Properties

### data

> **data**: `Uint8Array`

Defined in: [src/types/content.ts:206](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L206)

Raw audio data

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/content.ts:212](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L212)

Duration in seconds

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:209](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L209)

MIME type of the audio (e.g., 'audio/mp3', 'audio/wav')

***

### type

> **type**: `"audio"`

Defined in: [src/types/content.ts:203](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L203)

Discriminator for audio blocks
