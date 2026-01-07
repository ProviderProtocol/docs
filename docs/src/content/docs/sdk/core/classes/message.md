---
title: "Abstract Class: Message"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / Message

# Abstract Class: Message

Defined in: [src/types/messages.ts:74](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L74)

Abstract base class for all message types.

Provides common functionality for user, assistant, and tool result
messages, including content accessors and metadata handling.

## Example

```typescript
// Access text content from any message
const text = message.text;

// Access images
const images = message.images;
```

## Extended by

- [`UserMessage`](UserMessage.md)
- [`AssistantMessage`](AssistantMessage.md)
- [`ToolResultMessage`](ToolResultMessage.md)

## Constructors

### Constructor

> **new Message**(`options?`): `Message`

Defined in: [src/types/messages.ts:98](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L98)

Creates a new message instance.

#### Parameters

##### options?

[`MessageOptions`](../interfaces/MessageOptions.md)

Optional message ID and metadata

#### Returns

`Message`

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/types/messages.ts:76](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L76)

Unique message identifier

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/MessageMetadata.md)

Defined in: [src/types/messages.ts:82](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L82)

Provider-specific metadata, namespaced by provider name

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:79](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L79)

Timestamp when the message was created

***

### type

> `abstract` `readonly` **type**: [`MessageType`](../type-aliases/MessageType.md)

Defined in: [src/types/messages.ts:85](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L85)

Message type discriminator (implemented by subclasses)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/AudioBlock.md)[]

Defined in: [src/types/messages.ts:125](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L125)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/AudioBlock.md)[]

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/ImageBlock.md)[]

Defined in: [src/types/messages.ts:118](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L118)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/ImageBlock.md)[]

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:108](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L108)

Concatenated text content from all text blocks.
Blocks are joined with double newlines.

##### Returns

`string`

***

### video

#### Get Signature

> **get** **video**(): [`VideoBlock`](../interfaces/VideoBlock.md)[]

Defined in: [src/types/messages.ts:132](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L132)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/VideoBlock.md)[]

## Methods

### getContent()

> `abstract` `protected` **getContent**(): [`ContentBlock`](../type-aliases/ContentBlock.md)[]

Defined in: [src/types/messages.ts:91](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L91)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/ContentBlock.md)[]
