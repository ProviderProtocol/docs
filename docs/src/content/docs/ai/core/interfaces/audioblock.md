---
title: "Interface: AudioBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / AudioBlock

# Interface: AudioBlock

Defined in: [src/types/content.ts:111](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L111)

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

Defined in: [src/types/content.ts:116](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L116)

Raw audio data

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/content.ts:122](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L122)

Duration in seconds

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:119](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L119)

MIME type of the audio (e.g., 'audio/mp3', 'audio/wav')

***

### type

> **type**: `"audio"`

Defined in: [src/types/content.ts:113](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/content.ts#L113)

Discriminator for audio blocks
