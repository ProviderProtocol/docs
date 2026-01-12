---
title: "Class: ToolResultMessage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolResultMessage

# Class: ToolResultMessage

Defined in: [src/types/messages.ts:268](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L268)

Tool execution result message.

Contains the results of executing one or more tool calls,
sent back to the model for further processing.

## Example

```typescript
const msg = new ToolResultMessage([
  { toolCallId: 'call_1', result: { temperature: 72, conditions: 'sunny' } },
  { toolCallId: 'call_2', result: 'File not found', isError: true }
]);
```

## Extends

- [`Message`](message.md)

## Constructors

### Constructor

> **new ToolResultMessage**(`results`, `options?`): `ToolResultMessage`

Defined in: [src/types/messages.ts:281](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L281)

Creates a new tool result message.

#### Parameters

##### results

[`ToolResult`](../interfaces/toolresult.md)[]

Array of tool execution results

##### options?

[`MessageOptions`](../interfaces/messageoptions.md)

Optional message ID and metadata

#### Returns

`ToolResultMessage`

#### Overrides

[`Message`](message.md).[`constructor`](message.md#constructor)

## Properties

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

### results

> `readonly` **results**: [`ToolResult`](../interfaces/toolresult.md)[]

Defined in: [src/types/messages.ts:273](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L273)

Results from tool executions

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:90](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L90)

Timestamp when the message was created

#### Inherited from

[`Message`](message.md).[`timestamp`](message.md#timestamp)

***

### type

> `readonly` **type**: `"tool_result"`

Defined in: [src/types/messages.ts:270](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L270)

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

Defined in: [src/types/messages.ts:286](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L286)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]

#### Overrides

[`Message`](message.md).[`getContent`](message.md#getcontent)
