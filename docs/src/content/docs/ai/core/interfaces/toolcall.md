---
title: "Interface: ToolCall"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolCall

# Interface: ToolCall

Defined in: [src/types/tool.ts:45](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L45)

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

Defined in: [src/types/tool.ts:53](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L53)

Parsed arguments for the tool call

***

### toolCallId

> **toolCallId**: `string`

Defined in: [src/types/tool.ts:47](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L47)

Unique identifier for this tool call, used to match results

***

### toolName

> **toolName**: `string`

Defined in: [src/types/tool.ts:50](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L50)

Name of the tool being called
