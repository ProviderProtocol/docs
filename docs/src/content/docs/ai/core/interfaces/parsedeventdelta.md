---
title: "Interface: ParsedEventDelta"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ParsedEventDelta

# Interface: ParsedEventDelta

Defined in: [src/middleware/parsed-object.ts:19](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/parsed-object.ts#L19)

Event delta with parsed JSON data.
Extended by parsedObjectMiddleware when parsing is enabled.

## Extends

- [`EventDelta`](eventdelta.md)

## Properties

### argumentsJson?

> `optional` **argumentsJson**: `string`

Defined in: [src/types/stream.ts:101](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L101)

Incremental JSON arguments string (tool_call_delta)

#### Inherited from

[`EventDelta`](eventdelta.md).[`argumentsJson`](eventdelta.md#argumentsjson)

***

### data?

> `optional` **data**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/stream.ts:92](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L92)

Incremental binary data (image_delta, audio_delta, video_delta)

#### Inherited from

[`EventDelta`](eventdelta.md).[`data`](eventdelta.md#data)

***

### isError?

> `optional` **isError**: `boolean`

Defined in: [src/types/stream.ts:107](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L107)

Whether tool execution resulted in an error (tool_execution_end)

#### Inherited from

[`EventDelta`](eventdelta.md).[`isError`](eventdelta.md#iserror)

***

### parsed?

> `optional` **parsed**: `unknown`

Defined in: [src/middleware/parsed-object.ts:21](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/middleware/parsed-object.ts#L21)

Incrementally parsed JSON value

***

### result?

> `optional` **result**: `unknown`

Defined in: [src/types/stream.ts:104](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L104)

Tool execution result (tool_execution_end)

#### Inherited from

[`EventDelta`](eventdelta.md).[`result`](eventdelta.md#result)

***

### text?

> `optional` **text**: `string`

Defined in: [src/types/stream.ts:89](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L89)

Incremental text content (text_delta, reasoning_delta, object_delta)

#### Inherited from

[`EventDelta`](eventdelta.md).[`text`](eventdelta.md#text)

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: [src/types/stream.ts:110](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L110)

Timestamp in milliseconds (tool_execution_start/end)

#### Inherited from

[`EventDelta`](eventdelta.md).[`timestamp`](eventdelta.md#timestamp)

***

### toolCallId?

> `optional` **toolCallId**: `string`

Defined in: [src/types/stream.ts:95](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L95)

Tool call identifier (tool_call_delta, tool_execution_start/end)

#### Inherited from

[`EventDelta`](eventdelta.md).[`toolCallId`](eventdelta.md#toolcallid)

***

### toolName?

> `optional` **toolName**: `string`

Defined in: [src/types/stream.ts:98](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L98)

Tool name (tool_call_delta, tool_execution_start/end)

#### Inherited from

[`EventDelta`](eventdelta.md).[`toolName`](eventdelta.md#toolname)
