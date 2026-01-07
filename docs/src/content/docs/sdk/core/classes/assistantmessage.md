---
title: "Class: AssistantMessage"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / AssistantMessage

# Class: AssistantMessage

Defined in: [src/types/messages.ts:200](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L200)

Assistant response message.

Represents a response from the AI assistant, which may contain
text, media content, and/or tool call requests.

## Example

```typescript
// Simple text response
const msg = new AssistantMessage('Hello! How can I help?');

// Response with tool calls
const msg = new AssistantMessage(
  'Let me check the weather...',
  [{ toolCallId: 'call_1', toolName: 'get_weather', arguments: { location: 'NYC' } }]
);
```

## Extends

- [`Message`](Message.md)

## Constructors

### Constructor

> **new AssistantMessage**(`content`, `toolCalls?`, `options?`): `AssistantMessage`

Defined in: [src/types/messages.ts:217](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L217)

Creates a new assistant message.

#### Parameters

##### content

String (converted to TextBlock) or array of content blocks

`string` | [`AssistantContent`](../type-aliases/AssistantContent.md)[]

##### toolCalls?

[`ToolCall`](../interfaces/ToolCall.md)[]

Tool calls requested by the model

##### options?

[`MessageOptions`](../interfaces/MessageOptions.md)

Optional message ID and metadata

#### Returns

`AssistantMessage`

#### Overrides

[`Message`](Message.md).[`constructor`](Message.md#constructor)

## Properties

### content

> `readonly` **content**: [`AssistantContent`](../type-aliases/AssistantContent.md)[]

Defined in: [src/types/messages.ts:205](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L205)

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

### toolCalls?

> `readonly` `optional` **toolCalls**: [`ToolCall`](../interfaces/ToolCall.md)[]

Defined in: [src/types/messages.ts:208](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L208)

Tool calls requested by the model (if any)

***

### type

> `readonly` **type**: `"assistant"`

Defined in: [src/types/messages.ts:202](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L202)

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

### hasToolCalls

#### Get Signature

> **get** **hasToolCalls**(): `boolean`

Defined in: [src/types/messages.ts:238](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L238)

Whether this message contains tool call requests.

##### Returns

`boolean`

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

Defined in: [src/types/messages.ts:231](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L231)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/ContentBlock.md)[]

#### Overrides

[`Message`](Message.md).[`getContent`](Message.md#getcontent)
