---
title: "Class: AssistantMessage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / AssistantMessage

# Class: AssistantMessage

Defined in: [src/types/messages.ts:211](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L211)

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

- [`Message`](message.md)

## Constructors

### Constructor

> **new AssistantMessage**(`content`, `toolCalls?`, `options?`): `AssistantMessage`

Defined in: [src/types/messages.ts:228](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L228)

Creates a new assistant message.

#### Parameters

##### content

String (converted to TextBlock) or array of content blocks

`string` | [`AssistantContent`](../type-aliases/assistantcontent.md)[]

##### toolCalls?

[`ToolCall`](../interfaces/toolcall.md)[]

Tool calls requested by the model

##### options?

[`MessageOptions`](../interfaces/messageoptions.md)

Optional message ID and metadata

#### Returns

`AssistantMessage`

#### Overrides

[`Message`](message.md).[`constructor`](message.md#constructor)

## Properties

### content

> `readonly` **content**: [`AssistantContent`](../type-aliases/assistantcontent.md)[]

Defined in: [src/types/messages.ts:216](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L216)

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

### toolCalls?

> `readonly` `optional` **toolCalls**: [`ToolCall`](../interfaces/toolcall.md)[]

Defined in: [src/types/messages.ts:219](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L219)

Tool calls requested by the model (if any)

***

### type

> `readonly` **type**: `"assistant"`

Defined in: [src/types/messages.ts:213](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L213)

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

### hasToolCalls

#### Get Signature

> **get** **hasToolCalls**(): `boolean`

Defined in: [src/types/messages.ts:249](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L249)

Whether this message contains tool call requests.

##### Returns

`boolean`

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

Defined in: [src/types/messages.ts:242](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L242)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]

#### Overrides

[`Message`](message.md).[`getContent`](message.md#getcontent)
