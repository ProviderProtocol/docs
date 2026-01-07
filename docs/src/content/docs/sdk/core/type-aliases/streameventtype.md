---
title: "Type Alias: StreamEventType"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / StreamEventType

# Type Alias: StreamEventType

> **StreamEventType** = `"text_delta"` \| `"reasoning_delta"` \| `"image_delta"` \| `"audio_delta"` \| `"video_delta"` \| `"tool_call_delta"` \| `"tool_execution_start"` \| `"tool_execution_end"` \| `"message_start"` \| `"message_stop"` \| `"content_block_start"` \| `"content_block_stop"`

Defined in: [src/types/stream.ts:18](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/stream.ts#L18)

Stream event type discriminators.

Each event type represents a different kind of streaming update
from the LLM provider.
