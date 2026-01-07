---
title: "Interface: AudioBlock"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / AudioBlock

# Interface: AudioBlock

Defined in: [src/types/content.ts:111](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L111)

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

Defined in: [src/types/content.ts:116](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L116)

Raw audio data

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/content.ts:122](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L122)

Duration in seconds

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:119](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L119)

MIME type of the audio (e.g., 'audio/mp3', 'audio/wav')

***

### type

> **type**: `"audio"`

Defined in: [src/types/content.ts:113](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/content.ts#L113)

Discriminator for audio blocks
