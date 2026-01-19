---
title: "Variable: StreamEventType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / StreamEventType

# Variable: StreamEventType

> `const` **StreamEventType**: `object`

Defined in: [src/types/stream.ts:28](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/stream.ts#L28)

Stream event type constants.

Use these constants instead of raw strings for type-safe event handling:

## Type Declaration

### AudioDelta

> `readonly` **AudioDelta**: `"audio_delta"` = `'audio_delta'`

Incremental audio data

### ContentBlockStart

> `readonly` **ContentBlockStart**: `"content_block_start"` = `'content_block_start'`

Beginning of a content block

### ContentBlockStop

> `readonly` **ContentBlockStop**: `"content_block_stop"` = `'content_block_stop'`

End of a content block

### ImageDelta

> `readonly` **ImageDelta**: `"image_delta"` = `'image_delta'`

Incremental image data

### MessageStart

> `readonly` **MessageStart**: `"message_start"` = `'message_start'`

Beginning of a message

### MessageStop

> `readonly` **MessageStop**: `"message_stop"` = `'message_stop'`

End of a message

### ObjectDelta

> `readonly` **ObjectDelta**: `"object_delta"` = `'object_delta'`

Incremental structured object data (for structured output responses)

### ReasoningDelta

> `readonly` **ReasoningDelta**: `"reasoning_delta"` = `'reasoning_delta'`

Incremental reasoning/thinking output

### TextDelta

> `readonly` **TextDelta**: `"text_delta"` = `'text_delta'`

Incremental text output

### ToolCallDelta

> `readonly` **ToolCallDelta**: `"tool_call_delta"` = `'tool_call_delta'`

Incremental tool call data (arguments being streamed)

### ToolExecutionEnd

> `readonly` **ToolExecutionEnd**: `"tool_execution_end"` = `'tool_execution_end'`

Tool execution has completed

### ToolExecutionStart

> `readonly` **ToolExecutionStart**: `"tool_execution_start"` = `'tool_execution_start'`

Tool execution has started (may be emitted after completion in some implementations)

### VideoDelta

> `readonly` **VideoDelta**: `"video_delta"` = `'video_delta'`

Incremental video data

## Example

```typescript
import { StreamEventType } from 'upp';

for await (const event of stream) {
  if (event.type === StreamEventType.TextDelta) {
    process.stdout.write(event.delta.text ?? '');
  }
}
```
