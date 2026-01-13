---
title: "Class: AssistantMessage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / AssistantMessage

# Class: AssistantMessage

Defined in: [src/types/messages.ts:252](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L252)

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

Defined in: [src/types/messages.ts:269](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L269)

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

Defined in: [src/types/messages.ts:257](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L257)

Content blocks in this message

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/messages.ts:120](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L120)

Unique message identifier

#### Inherited from

[`Message`](message.md).[`id`](message.md#id)

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:126](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L126)

Provider-specific metadata, namespaced by provider name

#### Inherited from

[`Message`](message.md).[`metadata`](message.md#metadata)

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:123](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L123)

Timestamp when the message was created

#### Inherited from

[`Message`](message.md).[`timestamp`](message.md#timestamp)

***

### toolCalls?

> `readonly` `optional` **toolCalls**: [`ToolCall`](../interfaces/toolcall.md)[]

Defined in: [src/types/messages.ts:260](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L260)

Tool calls requested by the model (if any)

***

### type

> `readonly` **type**: `"assistant"`

Defined in: [src/types/messages.ts:254](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L254)

Message type discriminator

#### Overrides

[`Message`](message.md).[`type`](message.md#type)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:169](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L169)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

#### Inherited from

[`Message`](message.md).[`audio`](message.md#audio)

***

### hasToolCalls

#### Get Signature

> **get** **hasToolCalls**(): `boolean`

Defined in: [src/types/messages.ts:290](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L290)

Whether this message contains tool call requests.

##### Returns

`boolean`

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:162](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L162)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

#### Inherited from

[`Message`](message.md).[`images`](message.md#images)

***

### reasoning

#### Get Signature

> **get** **reasoning**(): [`ReasoningBlock`](../interfaces/reasoningblock.md)[]

Defined in: [src/types/messages.ts:184](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L184)

All reasoning/thinking content blocks in this message.
Available when using extended thinking models.

##### Returns

[`ReasoningBlock`](../interfaces/reasoningblock.md)[]

#### Inherited from

[`Message`](message.md).[`reasoning`](message.md#reasoning)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:152](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L152)

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

Defined in: [src/types/messages.ts:176](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L176)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

#### Inherited from

[`Message`](message.md).[`video`](message.md#video)

## Methods

### getContent()

> `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:283](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L283)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]

#### Overrides

[`Message`](message.md).[`getContent`](message.md#getcontent)
