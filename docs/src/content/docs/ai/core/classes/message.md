---
title: "Abstract Class: Message"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Message

# Abstract Class: Message

Defined in: [src/types/messages.ts:117](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L117)

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

Defined in: [src/types/messages.ts:141](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L141)

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

Defined in: [src/types/messages.ts:119](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L119)

Unique message identifier

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:125](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L125)

Provider-specific metadata, namespaced by provider name

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:122](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L122)

Timestamp when the message was created

***

### type

> `abstract` `readonly` **type**: [`MessageType`](../type-aliases/messagetype.md)

Defined in: [src/types/messages.ts:128](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L128)

Message type discriminator (implemented by subclasses)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:168](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L168)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:161](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L161)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:151](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L151)

Concatenated text content from all text blocks.
Blocks are joined with double newlines.

##### Returns

`string`

***

### video

#### Get Signature

> **get** **video**(): [`VideoBlock`](../interfaces/videoblock.md)[]

Defined in: [src/types/messages.ts:175](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L175)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

## Methods

### getContent()

> `abstract` `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:134](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L134)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]
