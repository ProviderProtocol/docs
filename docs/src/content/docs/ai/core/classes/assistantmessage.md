---
title: "Class: AssistantMessage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / AssistantMessage

# Class: AssistantMessage

Defined in: [src/types/messages.ts:243](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L243)

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

Defined in: [src/types/messages.ts:260](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L260)

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

Defined in: [src/types/messages.ts:248](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L248)

Content blocks in this message

***

### id

> `readonly` **id**: `string`

Defined in: [src/types/messages.ts:119](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L119)

Unique message identifier

#### Inherited from

[`Message`](message.md).[`id`](message.md#id)

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:125](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L125)

Provider-specific metadata, namespaced by provider name

#### Inherited from

[`Message`](message.md).[`metadata`](message.md#metadata)

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:122](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L122)

Timestamp when the message was created

#### Inherited from

[`Message`](message.md).[`timestamp`](message.md#timestamp)

***

### toolCalls?

> `readonly` `optional` **toolCalls**: [`ToolCall`](../interfaces/toolcall.md)[]

Defined in: [src/types/messages.ts:251](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L251)

Tool calls requested by the model (if any)

***

### type

> `readonly` **type**: `"assistant"`

Defined in: [src/types/messages.ts:245](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L245)

Message type discriminator

#### Overrides

[`Message`](message.md).[`type`](message.md#type)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:168](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L168)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

#### Inherited from

[`Message`](message.md).[`audio`](message.md#audio)

***

### hasToolCalls

#### Get Signature

> **get** **hasToolCalls**(): `boolean`

Defined in: [src/types/messages.ts:281](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L281)

Whether this message contains tool call requests.

##### Returns

`boolean`

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:161](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L161)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

#### Inherited from

[`Message`](message.md).[`images`](message.md#images)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:151](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L151)

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

Defined in: [src/types/messages.ts:175](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L175)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

#### Inherited from

[`Message`](message.md).[`video`](message.md#video)

## Methods

### getContent()

> `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:274](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L274)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]

#### Overrides

[`Message`](message.md).[`getContent`](message.md#getcontent)
