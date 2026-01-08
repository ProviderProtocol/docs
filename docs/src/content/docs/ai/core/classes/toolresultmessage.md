---
title: "Class: ToolResultMessage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolResultMessage

# Class: ToolResultMessage

Defined in: [src/types/messages.ts:257](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L257)

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

Defined in: [src/types/messages.ts:270](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L270)

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

Defined in: [src/types/messages.ts:76](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L76)

Unique message identifier

#### Inherited from

[`Message`](message.md).[`id`](message.md#id)

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:82](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L82)

Provider-specific metadata, namespaced by provider name

#### Inherited from

[`Message`](message.md).[`metadata`](message.md#metadata)

***

### results

> `readonly` **results**: [`ToolResult`](../interfaces/toolresult.md)[]

Defined in: [src/types/messages.ts:262](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L262)

Results from tool executions

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:79](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L79)

Timestamp when the message was created

#### Inherited from

[`Message`](message.md).[`timestamp`](message.md#timestamp)

***

### type

> `readonly` **type**: `"tool_result"`

Defined in: [src/types/messages.ts:259](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L259)

Message type discriminator

#### Overrides

[`Message`](message.md).[`type`](message.md#type)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:125](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L125)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

#### Inherited from

[`Message`](message.md).[`audio`](message.md#audio)

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:118](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L118)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

#### Inherited from

[`Message`](message.md).[`images`](message.md#images)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:108](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L108)

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

Defined in: [src/types/messages.ts:132](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L132)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

#### Inherited from

[`Message`](message.md).[`video`](message.md#video)

## Methods

### getContent()

> `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:275](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/types/messages.ts#L275)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]

#### Overrides

[`Message`](message.md).[`getContent`](message.md#getcontent)
