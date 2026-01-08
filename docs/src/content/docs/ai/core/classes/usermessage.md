---
title: "Class: UserMessage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / UserMessage

# Class: UserMessage

Defined in: [src/types/messages.ts:155](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L155)

User input message.

Represents a message from the user, which can contain text and/or
multimodal content like images, audio, or video.

## Example

```typescript
// Simple text message
const msg = new UserMessage('Hello, world!');

// Multimodal message
const msg = new UserMessage([
  { type: 'text', text: 'What is in this image?' },
  { type: 'image', source: { type: 'url', url: '...' }, mimeType: 'image/png' }
]);
```

## Extends

- [`Message`](message.md)

## Constructors

### Constructor

> **new UserMessage**(`content`, `options?`): `UserMessage`

Defined in: [src/types/messages.ts:168](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L168)

Creates a new user message.

#### Parameters

##### content

String (converted to TextBlock) or array of content blocks

`string` | [`UserContent`](../type-aliases/usercontent.md)[]

##### options?

[`MessageOptions`](../interfaces/messageoptions.md)

Optional message ID and metadata

#### Returns

`UserMessage`

#### Overrides

[`Message`](message.md).[`constructor`](message.md#constructor)

## Properties

### content

> `readonly` **content**: [`UserContent`](../type-aliases/usercontent.md)[]

Defined in: [src/types/messages.ts:160](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L160)

Content blocks in this message

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/messages.ts:76](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L76)

Unique message identifier

#### Inherited from

[`Message`](message.md).[`id`](message.md#id)

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:82](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L82)

Provider-specific metadata, namespaced by provider name

#### Inherited from

[`Message`](message.md).[`metadata`](message.md#metadata)

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:79](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L79)

Timestamp when the message was created

#### Inherited from

[`Message`](message.md).[`timestamp`](message.md#timestamp)

***

### type

> `readonly` **type**: `"user"`

Defined in: [src/types/messages.ts:157](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L157)

Message type discriminator

#### Overrides

[`Message`](message.md).[`type`](message.md#type)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:125](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L125)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

#### Inherited from

[`Message`](message.md).[`audio`](message.md#audio)

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:118](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L118)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

#### Inherited from

[`Message`](message.md).[`images`](message.md#images)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:108](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L108)

Concatenated text content from all text blocks.
Blocks are joined with double newlines.

##### Returns

`string`

#### Inherited from

[`Message`](message.md).[`text`](message.md#text)

***

### video

#### Get Signature

> **get** **video**(): [`VideoBlock`](../interfaces/videoblock.md)[]

Defined in: [src/types/messages.ts:132](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L132)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

#### Inherited from

[`Message`](message.md).[`video`](message.md#video)

## Methods

### getContent()

> `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:177](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/messages.ts#L177)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]

#### Overrides

[`Message`](message.md).[`getContent`](message.md#getcontent)
