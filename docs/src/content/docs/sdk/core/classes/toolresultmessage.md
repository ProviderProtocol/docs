---
title: "Class: ToolResultMessage"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ToolResultMessage

# Class: ToolResultMessage

Defined in: [src/types/messages.ts:257](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L257)

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

- [`Message`](Message.md)

## Constructors

### Constructor

> **new ToolResultMessage**(`results`, `options?`): `ToolResultMessage`

Defined in: [src/types/messages.ts:270](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L270)

Creates a new tool result message.

#### Parameters

##### results

[`ToolResult`](../interfaces/ToolResult.md)[]

Array of tool execution results

##### options?

[`MessageOptions`](../interfaces/MessageOptions.md)

Optional message ID and metadata

#### Returns

`ToolResultMessage`

#### Overrides

[`Message`](Message.md).[`constructor`](Message.md#constructor)

## Properties

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

### results

> `readonly` **results**: [`ToolResult`](../interfaces/ToolResult.md)[]

Defined in: [src/types/messages.ts:262](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L262)

Results from tool executions

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:79](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L79)

Timestamp when the message was created

#### Inherited from

[`Message`](Message.md).[`timestamp`](Message.md#timestamp)

***

### type

> `readonly` **type**: `"tool_result"`

Defined in: [src/types/messages.ts:259](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L259)

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

Defined in: [src/types/messages.ts:275](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L275)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/ContentBlock.md)[]

#### Overrides

[`Message`](Message.md).[`getContent`](Message.md#getcontent)
