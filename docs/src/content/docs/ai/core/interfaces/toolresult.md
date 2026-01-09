---
title: "Interface: ToolResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolResult

# Interface: ToolResult

Defined in: [src/types/tool.ts:77](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L77)

Result of tool execution.

Returned after executing a tool, containing the result data
and whether an error occurred.

## Example

```typescript
const result: ToolResult = {
  toolCallId: 'call_abc123',
  result: { temperature: 72, conditions: 'sunny' }
};

// Error result
const errorResult: ToolResult = {
  toolCallId: 'call_abc123',
  result: 'Location not found',
  isError: true
};
```

## Properties

### isError?

> `optional` **isError**: `boolean`

Defined in: [src/types/tool.ts:85](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L85)

Whether the tool execution resulted in an error

***

### result

> **result**: `unknown`

Defined in: [src/types/tool.ts:82](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L82)

The result data (can be any serializable value)

***

### toolCallId

> **toolCallId**: `string`

Defined in: [src/types/tool.ts:79](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L79)

The tool call ID this result corresponds to
