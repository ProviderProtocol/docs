---
title: "Type Alias: ContextAwareToolRun()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ContextAwareToolRun

# Type Alias: ContextAwareToolRun()

> **ContextAwareToolRun** = (`params`, `context?`) => `Promise`\<`unknown`\>

Defined in: [src/execution/types.ts:740](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L740)

Type for a tool run function that accepts execution context as a second parameter.

Tools can optionally accept ToolExecutionContext for sub-agent inheritance
and event propagation. The context parameter is optional to maintain
compatibility with standard tools.

## Parameters

### params

`Record`\<`string`, `unknown`\>

The tool parameters from the model

### context?

[`ToolExecutionContext`](../interfaces/toolexecutioncontext.md)

Optional execution context for agent features

## Returns

`Promise`\<`unknown`\>

Promise resolving to the tool result

## Example

```typescript
const contextAwareRun: ContextAwareToolRun = async (params, context) => {
  if (context?.onSubagentEvent) {
    // This tool can spawn sub-agents
    context.onSubagentEvent({
      type: 'subagent_start',
      subagentId: 'sub-123',
      subagentType: 'explorer',
      parentToolCallId: context.toolCallId,
      prompt: 'Explore the codebase',
      timestamp: Date.now(),
    });
  }
  return 'result';
};
```
