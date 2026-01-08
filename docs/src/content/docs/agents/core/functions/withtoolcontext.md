---
title: "Function: withToolContext()"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / withToolContext

# Function: withToolContext()

> **withToolContext**(`tool`, `handler`): `Tool`

Defined in: [src/execution/tool-context.ts:239](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/tool-context.ts#L239)

Creates a context-aware tool wrapper for existing tools.

This utility function allows you to add context support to a tool
that doesn't natively support it. The handler function receives
both the parameters and the optional execution context.

This is useful when:
- Wrapping third-party tools to add context awareness
- Creating tools that need to spawn sub-agents
- Adding logging or tracing to existing tools

## Parameters

### tool

`Tool`

The original tool to wrap

### handler

[`ContextAwareToolRun`](../type-aliases/ContextAwareToolRun.md)

Function that receives params and context, returns result

## Returns

`Tool`

New tool with context support via the provided handler

## Examples

```typescript
import { withToolContext } from '@providerprotocol/agents/execution';

// Wrap an existing tool to add context awareness
const originalTool = {
  name: 'search',
  description: 'Search the web',
  parameters: { type: 'object', properties: { query: { type: 'string' } } },
  run: async (params) => searchWeb(params.query),
};

const contextAwareTool = withToolContext(originalTool, async (params, context) => {
  // Log which agent is using this tool
  console.log(`Agent ${context?.agentId} searching for: ${params.query}`);

  // Optionally emit sub-agent events
  if (context?.onSubagentEvent) {
    // Could spawn a sub-agent here and emit events
  }

  // Call the original implementation
  return searchWeb(params.query as string);
});
```

```typescript
// Create a tool that spawns sub-agents
const explorerTool = withToolContext(baseTool, async (params, context) => {
  const subagentId = generateUUID();

  // Emit start event
  context?.onSubagentEvent?.({
    type: 'subagent_start',
    subagentId,
    subagentType: 'explorer',
    parentToolCallId: context.toolCallId,
    prompt: params.task as string,
    timestamp: Date.now(),
  });

  try {
    const result = await runExploration(params.task);

    // Emit end event on success
    context?.onSubagentEvent?.({
      type: 'subagent_end',
      subagentId,
      subagentType: 'explorer',
      parentToolCallId: context.toolCallId,
      success: true,
      result,
      timestamp: Date.now(),
    });

    return result;
  } catch (error) {
    // Emit end event on failure
    context?.onSubagentEvent?.({
      type: 'subagent_end',
      subagentId,
      subagentType: 'explorer',
      parentToolCallId: context.toolCallId,
      success: false,
      error: error.message,
      timestamp: Date.now(),
    });
    throw error;
  }
});
```
