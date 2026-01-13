---
title: "Abstract Class: Message"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Message

# Abstract Class: Message

Defined in: [src/types/messages.ts:118](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L118)

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

Defined in: [src/types/messages.ts:142](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L142)

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

Defined in: [src/types/messages.ts:120](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L120)

Unique message identifier

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:126](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L126)

Provider-specific metadata, namespaced by provider name

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:123](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L123)

Timestamp when the message was created

***

### type

> `abstract` `readonly` **type**: [`MessageType`](../type-aliases/messagetype.md)

Defined in: [src/types/messages.ts:129](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L129)

Message type discriminator (implemented by subclasses)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:169](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L169)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:162](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L162)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

***

### reasoning

#### Get Signature

> **get** **reasoning**(): [`ReasoningBlock`](../interfaces/reasoningblock.md)[]

Defined in: [src/types/messages.ts:184](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L184)

All reasoning/thinking content blocks in this message.
Available when using extended thinking models.

##### Returns

[`ReasoningBlock`](../interfaces/reasoningblock.md)[]

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:152](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L152)

Concatenated text content from all text blocks.
Blocks are joined with double newlines.

##### Returns

`string`

***

### video

#### Get Signature

> **get** **video**(): [`VideoBlock`](../interfaces/videoblock.md)[]

Defined in: [src/types/messages.ts:176](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L176)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

## Methods

### getContent()

> `abstract` `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:135](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L135)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]
