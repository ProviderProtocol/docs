---
title: "Interface: AudioBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / AudioBlock

# Interface: AudioBlock

Defined in: [src/types/content.ts:304](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L304)

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

Defined in: [src/types/content.ts:309](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L309)

Raw audio data

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/content.ts:315](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L315)

Duration in seconds

***

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:312](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L312)

MIME type of the audio (e.g., 'audio/mp3', 'audio/wav')

***

### type

> **type**: `"audio"`

Defined in: [src/types/content.ts:306](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L306)

Discriminator for audio blocks
