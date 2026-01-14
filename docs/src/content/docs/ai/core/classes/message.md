---
title: "Abstract Class: Message"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Message

# Abstract Class: Message

Defined in: [src/types/messages.ts:119](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L119)

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

- [`UserMessage`](usermessage.md)
- [`AssistantMessage`](assistantmessage.md)
- [`ToolResultMessage`](toolresultmessage.md)

## Constructors

### Constructor

> **new Message**(`options?`): `Message`

Defined in: [src/types/messages.ts:143](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L143)

Creates a new message instance.

#### Parameters

##### options?

[`MessageOptions`](../interfaces/messageoptions.md)

Optional message ID and metadata

#### Returns

`Message`

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/types/messages.ts:121](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L121)

Unique message identifier

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:127](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L127)

Provider-specific metadata, namespaced by provider name

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:124](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L124)

Timestamp when the message was created

***

### type

> `abstract` `readonly` **type**: [`MessageType`](../type-aliases/messagetype.md)

Defined in: [src/types/messages.ts:130](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L130)

Message type discriminator (implemented by subclasses)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:177](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L177)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

***

### documents

#### Get Signature

> **get** **documents**(): [`DocumentBlock`](../interfaces/documentblock.md)[]

Defined in: [src/types/messages.ts:170](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L170)

All document content blocks in this message.

##### Returns

[`DocumentBlock`](../interfaces/documentblock.md)[]

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:163](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L163)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

***

### reasoning

#### Get Signature

> **get** **reasoning**(): [`ReasoningBlock`](../interfaces/reasoningblock.md)[]

Defined in: [src/types/messages.ts:192](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L192)

All reasoning/thinking content blocks in this message.
Available when using extended thinking models.

##### Returns

[`ReasoningBlock`](../interfaces/reasoningblock.md)[]

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:153](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L153)

Concatenated text content from all text blocks.
Blocks are joined with double newlines.

##### Returns

`string`

***

### video

#### Get Signature

> **get** **video**(): [`VideoBlock`](../interfaces/videoblock.md)[]

Defined in: [src/types/messages.ts:184](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L184)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

## Methods

### getContent()

> `abstract` `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:136](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L136)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]
