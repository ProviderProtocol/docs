---
title: "Function: executeOrderedToolCalls()"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / executeOrderedToolCalls

# Function: executeOrderedToolCalls()

> **executeOrderedToolCalls**(`toolCalls`, `tools`, `executor`): `Promise`\<[`ToolExecutionResult`](../interfaces/ToolExecutionResult.md)[]\>

Defined in: [src/execution/tool-ordering.ts:363](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/tool-ordering.ts#L363)

Executes tool calls respecting dependency ordering.

This is a high-level function that combines [orderToolCalls](orderToolCalls.md) with
execution logic. It orders the tool calls, then executes them in groups
while respecting barriers and dependencies.

Per UAP-1.0 Sections 8.5 and 8.6:
- Tools with `sequential: true` execute alone (as barriers)
- Tools with `dependsOn` wait for named tools to complete
- Tool calls with `after` wait for specific call IDs to complete

## Parameters

### toolCalls

`ToolCall`[]

Tool calls from the model response

### tools

`Tool`\<`unknown`, `unknown`\>[]

Tool definitions with potential dependencies

### executor

[`ToolExecutor`](../type-aliases/ToolExecutor.md)

Function to execute a single tool call

## Returns

`Promise`\<[`ToolExecutionResult`](../interfaces/ToolExecutionResult.md)[]\>

Array of execution results in completion order

## Example

```typescript
import {
  executeOrderedToolCalls,
  ToolWithDependencies,
} from '@providerprotocol/agents/execution';

// Define tools with dependencies
const readTool: ToolWithDependencies = {
  name: 'read_file',
  description: 'Read a file',
  parameters: { type: 'object', properties: { path: { type: 'string' } } },
  sequential: true, // Must complete before others
  run: async (params) => readFile(params.path as string),
};

const processTool: ToolWithDependencies = {
  name: 'process',
  description: 'Process data',
  parameters: { type: 'object', properties: { data: { type: 'string' } } },
  dependsOn: ['read_file'], // Wait for read_file
  run: async (params) => process(params.data as string),
};

// Execute with automatic ordering
const results = await executeOrderedToolCalls(
  turn.response.toolCalls,
  [readTool, processTool],
  async (call, tool) => tool.run(call.arguments),
);

// Check results
for (const result of results) {
  if (result.isError) {
    console.error(`${result.call.toolName} failed: ${result.error}`);
  } else {
    console.log(`${result.call.toolName} took ${result.duration}ms`);
  }
}
```

## See

 - [orderToolCalls](orderToolCalls.md) for just the ordering logic
 - UAP-1.0 Spec Sections 8.5 and 8.6
