---
title: "Interface: EventDelta"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EventDelta

# Interface: EventDelta

Defined in: [src/types/stream.ts:87](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L87)

Event delta data payload.

Contains the type-specific data for a streaming event.
Different fields are populated depending on the event type:

| Event Type | Fields |
|------------|--------|
| `text_delta` | `text` |
| `reasoning_delta` | `text` |
| `object_delta` | `text` |
| `image_delta` | `data` |
| `audio_delta` | `data` |
| `video_delta` | `data` |
| `tool_call_delta` | `toolCallId`, `toolName`, `argumentsJson` |
| `tool_execution_start` | `toolCallId`, `toolName`, `timestamp` |
| `tool_execution_end` | `toolCallId`, `toolName`, `result`, `isError`, `timestamp` |
| `message_start` | (none) |
| `message_stop` | (none) |
| `content_block_start` | (none) |
| `content_block_stop` | (none) |

## Extended by

- [`ParsedEventDelta`](parsedeventdelta.md)

## Properties

### argumentsJson?

> `optional` **argumentsJson**: `string`

Defined in: [src/types/stream.ts:101](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L101)

Incremental JSON arguments string (tool_call_delta)

***

### data?

> `optional` **data**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [src/types/stream.ts:92](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L92)

Incremental binary data (image_delta, audio_delta, video_delta)

***

### isError?

> `optional` **isError**: `boolean`

Defined in: [src/types/stream.ts:107](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L107)

Whether tool execution resulted in an error (tool_execution_end)

***

### result?

> `optional` **result**: `unknown`

Defined in: [src/types/stream.ts:104](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L104)

Tool execution result (tool_execution_end)

***

### text?

> `optional` **text**: `string`

Defined in: [src/types/stream.ts:89](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L89)

Incremental text content (text_delta, reasoning_delta, object_delta)

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: [src/types/stream.ts:110](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L110)

Timestamp in milliseconds (tool_execution_start/end)

***

### toolCallId?

> `optional` **toolCallId**: `string`

Defined in: [src/types/stream.ts:95](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L95)

Tool call identifier (tool_call_delta, tool_execution_start/end)

***

### toolName?

> `optional` **toolName**: `string`

Defined in: [src/types/stream.ts:98](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L98)

Tool name (tool_call_delta, tool_execution_start/end)
