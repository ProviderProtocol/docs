---
title: "Function: orderToolCalls()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / orderToolCalls

# Function: orderToolCalls()

> **orderToolCalls**(`toolCalls`, `tools`): [`ExecutionGroup`](../interfaces/executiongroup.md)[]

Defined in: [src/execution/tool-ordering.ts:118](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L118)

Orders tool calls into execution groups respecting all dependency types.

This function implements the tool execution ordering algorithm per
UAP-1.0 Sections 8.5 and 8.6. It takes a list of tool calls and
groups them for execution while respecting three types of dependencies:

1. **Tool-level `sequential` flag**: Tools marked as sequential create
   execution barriers - they must complete before any other tool starts.

2. **Tool-level `dependsOn` array**: Tools can declare dependencies on
   other tool names, waiting for those tools to complete first.

3. **Model-driven `after` array**: Individual tool calls can specify
   dependencies on specific call IDs for fine-grained ordering.

The algorithm performs a topological sort, grouping calls that have
all dependencies satisfied. Sequential tools are isolated into single-call
barrier groups, while non-sequential tools are grouped for parallel execution.

## Parameters

### toolCalls

`ToolCall`[]

Tool calls from the model response

### tools

`Tool`\<`unknown`, `unknown`\>[]

Tool definitions (may include dependency options)

## Returns

[`ExecutionGroup`](../interfaces/executiongroup.md)[]

Ordered array of execution groups to process in sequence

## Example

```typescript
import { orderToolCalls, ToolWithDependencies } from '@providerprotocol/agents/execution';

// Define tools with dependencies
const readTool: ToolWithDependencies = {
  name: 'read_file',
  sequential: true, // Must complete alone
  run: async (params) => readFile(params.path),
};

const analyzeTools = [
  { name: 'analyze_a', dependsOn: ['read_file'], run: async () => {} },
  { name: 'analyze_b', dependsOn: ['read_file'], run: async () => {} },
];

// Order the calls
const groups = orderToolCalls(toolCalls, [readTool, ...analyzeTools]);

// Execute groups in order
for (const group of groups) {
  if (group.isBarrier) {
    // Sequential execution
    for (const call of group.calls) {
      await executeTool(call);
    }
  } else {
    // Parallel execution
    await Promise.all(group.calls.map(executeTool));
  }
}
```

## See

 - UAP-1.0 Spec Section 8.5 for tool-level dependencies
 - UAP-1.0 Spec Section 8.6 for model-driven dependencies
 - [executeOrderedToolCalls](executeorderedtoolcalls.md) for a higher-level execution function
