---
title: "Class: Audio"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Audio

# Class: Audio

Defined in: [src/core/media/Audio.ts:36](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L36)

Represents an audio file that can be used in UPP messages.

Audio can be created from various sources (files, bytes, base64) and
converted to different formats as needed by providers. The class provides
a unified interface regardless of the underlying source type.

Note: Providers have size limits for inline audio data. Google Gemini
limits inline data to 20MB per request. For larger files, consider using
provider-specific file upload APIs.

## Example

```typescript
// Load from file
const fileAudio = await Audio.fromPath('./recording.mp3');

// From raw bytes
const bytesAudio = Audio.fromBytes(uint8Array, 'audio/wav');

// Use in a message
const message = new UserMessage([audio.toBlock()]);
```

## Properties

### data

> `readonly` **data**: `Uint8Array`

Defined in: [src/core/media/Audio.ts:38](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L38)

The audio data as raw bytes

***

### duration?

> `readonly` `optional` **duration**: `number`

Defined in: [src/core/media/Audio.ts:42](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L42)

Duration in seconds, if known

***

### mimeType

> `readonly` **mimeType**: `string`

Defined in: [src/core/media/Audio.ts:40](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L40)

MIME type of the audio (e.g., 'audio/mp3', 'audio/wav')

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/core/media/Audio.ts:57](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L57)

Gets the size of the audio data in bytes.

##### Returns

`number`

## Methods

### toBase64()

> **toBase64**(): `string`

Defined in: [src/core/media/Audio.ts:66](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L66)

Converts the audio to a base64-encoded string.

#### Returns

`string`

The audio data as a base64 string

***

### toBlock()

> **toBlock**(): [`AudioBlock`](../interfaces/audioblock.md)

Defined in: [src/core/media/Audio.ts:98](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L98)

Converts this Audio to an AudioBlock for use in UPP messages.

#### Returns

[`AudioBlock`](../interfaces/audioblock.md)

An AudioBlock that can be included in message content arrays

***

### toBytes()

> **toBytes**(): `Uint8Array`

Defined in: [src/core/media/Audio.ts:89](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L89)

Gets the audio data as raw bytes.

#### Returns

`Uint8Array`

The audio data as a Uint8Array

***

### toDataUrl()

> **toDataUrl**(): `string`

Defined in: [src/core/media/Audio.ts:79](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L79)

Converts the audio to a data URL suitable for embedding.

#### Returns

`string`

A data URL in the format `data:{mimeType};base64,{data}`

***

### fromBase64()

> `static` **fromBase64**(`base64`, `mimeType`, `duration?`): `Audio`

Defined in: [src/core/media/Audio.ts:180](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L180)

Creates an Audio from a base64-encoded string.

#### Parameters

##### base64

`string`

The base64-encoded audio data (without data URL prefix)

##### mimeType

`string`

The MIME type of the audio

##### duration?

`number`

Optional duration in seconds

#### Returns

`Audio`

An Audio containing the decoded data

#### Example

```typescript
const audio = Audio.fromBase64(base64String, 'audio/mp3');
```

***

### fromBlock()

> `static` **fromBlock**(`block`): `Audio`

Defined in: [src/core/media/Audio.ts:198](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L198)

Creates an Audio from an existing AudioBlock.

Useful for converting content blocks received from providers back
into Audio instances for further processing.

#### Parameters

##### block

[`AudioBlock`](../interfaces/audioblock.md)

An AudioBlock from message content

#### Returns

`Audio`

An Audio with the block's data and metadata

***

### fromBytes()

> `static` **fromBytes**(`data`, `mimeType`, `duration?`): `Audio`

Defined in: [src/core/media/Audio.ts:163](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L163)

Creates an Audio from raw byte data.

#### Parameters

##### data

`Uint8Array`

The audio data as a Uint8Array

##### mimeType

`string`

The MIME type of the audio

##### duration?

`number`

Optional duration in seconds

#### Returns

`Audio`

An Audio containing the byte data

#### Example

```typescript
const audio = Audio.fromBytes(wavData, 'audio/wav');
```

***

### fromPath()

> `static` **fromPath**(`path`, `duration?`): `Promise`\<`Audio`\>

Defined in: [src/core/media/Audio.ts:122](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/media/Audio.ts#L122)

Creates an Audio by reading a file from disk.

The file is read into memory as bytes. MIME type is automatically
detected from the file extension.

#### Parameters

##### path

`string`

Path to the audio file

##### duration?

`number`

Optional duration in seconds

#### Returns

`Promise`\<`Audio`\>

Promise resolving to an Audio with the file contents

#### Example

```typescript
const audio = await Audio.fromPath('./recordings/interview.mp3');
```
