---
title: "Class: UserMessage"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / UserMessage

# Class: UserMessage

Defined in: [src/types/messages.ts:155](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L155)

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

- [`Message`](Message.md)

## Constructors

### Constructor

> **new UserMessage**(`content`, `options?`): `UserMessage`

Defined in: [src/types/messages.ts:168](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L168)

Creates a new user message.

#### Parameters

##### content

String (converted to TextBlock) or array of content blocks

`string` | [`UserContent`](../type-aliases/UserContent.md)[]

##### options?

[`MessageOptions`](../interfaces/MessageOptions.md)

Optional message ID and metadata

#### Returns

`UserMessage`

#### Overrides

[`Message`](Message.md).[`constructor`](Message.md#constructor)

## Properties

### content

> `readonly` **content**: [`UserContent`](../type-aliases/UserContent.md)[]

Defined in: [src/types/messages.ts:160](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L160)

Content blocks in this message

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/messages.ts:76](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L76)

Unique message identifier

#### Inherited from

[`Message`](Message.md).[`id`](Message.md#id)

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/MessageMetadata.md)

Defined in: [src/types/messages.ts:82](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L82)

Provider-specific metadata, namespaced by provider name

#### Inherited from

[`Message`](Message.md).[`metadata`](Message.md#metadata)

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:79](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L79)

Timestamp when the message was created

#### Inherited from

[`Message`](Message.md).[`timestamp`](Message.md#timestamp)

***

### type

> `readonly` **type**: `"user"`

Defined in: [src/types/messages.ts:157](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L157)

Message type discriminator

#### Overrides

[`Message`](Message.md).[`type`](Message.md#type)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/AudioBlock.md)[]

Defined in: [src/types/messages.ts:125](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L125)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/AudioBlock.md)[]

#### Inherited from

[`Message`](Message.md).[`audio`](Message.md#audio)

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/ImageBlock.md)[]

Defined in: [src/types/messages.ts:118](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L118)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/ImageBlock.md)[]

#### Inherited from

[`Message`](Message.md).[`images`](Message.md#images)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:108](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L108)

Concatenated text content from all text blocks.
Blocks are joined with double newlines.

##### Returns

`string`

#### Inherited from

[`Message`](Message.md).[`text`](Message.md#text)

***

### video

#### Get Signature

> **get** **video**(): [`VideoBlock`](../interfaces/VideoBlock.md)[]

Defined in: [src/types/messages.ts:132](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L132)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/VideoBlock.md)[]

#### Inherited from

[`Message`](Message.md).[`video`](Message.md#video)

## Methods

### getContent()

> `protected` **getContent**(): [`ContentBlock`](../type-aliases/ContentBlock.md)[]

Defined in: [src/types/messages.ts:177](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L177)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/ContentBlock.md)[]

#### Overrides

[`Message`](Message.md).[`getContent`](Message.md#getcontent)
