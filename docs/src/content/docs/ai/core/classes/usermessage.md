---
title: "Class: UserMessage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / UserMessage

# Class: UserMessage

Defined in: [src/types/messages.ts:166](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L166)

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

Defined in: [src/types/messages.ts:179](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L179)

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

Defined in: [src/types/messages.ts:171](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L171)

Content blocks in this message

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/messages.ts:87](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L87)

Unique message identifier

#### Inherited from

[`Message`](message.md).[`id`](message.md#id)

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:93](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L93)

Provider-specific metadata, namespaced by provider name

#### Inherited from

[`Message`](message.md).[`metadata`](message.md#metadata)

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:90](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L90)

Timestamp when the message was created

#### Inherited from

[`Message`](message.md).[`timestamp`](message.md#timestamp)

***

### type

> `readonly` **type**: `"user"`

Defined in: [src/types/messages.ts:168](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L168)

Message type discriminator

#### Overrides

[`Message`](message.md).[`type`](message.md#type)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:136](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L136)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

#### Inherited from

[`Message`](message.md).[`audio`](message.md#audio)

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:129](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L129)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

#### Inherited from

[`Message`](message.md).[`images`](message.md#images)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:119](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L119)

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

Defined in: [src/types/messages.ts:143](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L143)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

#### Inherited from

[`Message`](message.md).[`video`](message.md#video)

## Methods

### getContent()

> `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:188](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L188)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]

#### Overrides

[`Message`](message.md).[`getContent`](message.md#getcontent)
