---
title: "Interface: ToolResult"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / ToolResult

# Interface: ToolResult

Defined in: [src/types/tool.ts:59](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L59)

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

Defined in: [src/types/tool.ts:67](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L67)

Whether the tool execution resulted in an error

***

### result

> **result**: `unknown`

Defined in: [src/types/tool.ts:64](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L64)

The result data (can be any serializable value)

***

### toolCallId

> **toolCallId**: `string`

Defined in: [src/types/tool.ts:61](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/tool.ts#L61)

The tool call ID this result corresponds to
