---
title: "Interface: ToolCall"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ToolCall

# Interface: ToolCall

Defined in: [src/types/tool.ts:27](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L27)

Tool call requested by the model.

Represents a single function call request from the LLM, including
the tool name and parsed arguments.

## Example

```typescript
const toolCall: ToolCall = {
  toolCallId: 'call_abc123',
  toolName: 'get_weather',
  arguments: { location: 'San Francisco', units: 'celsius' }
};
```

## Properties

### arguments

> **arguments**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/tool.ts:35](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L35)

Parsed arguments for the tool call

***

### toolCallId

> **toolCallId**: `string`

Defined in: [src/types/tool.ts:29](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L29)

Unique identifier for this tool call, used to match results

***

### toolName

> **toolName**: `string`

Defined in: [src/types/tool.ts:32](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L32)

Name of the tool being called
