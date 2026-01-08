---
title: "Function: injectToolContext()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / injectToolContext

# Function: injectToolContext()

> **injectToolContext**(`tools`, `context`, `options`): `Tool`\<`unknown`, `unknown`\>[]

Defined in: [src/execution/tool-context.ts:67](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/tool-context.ts#L67)

Wraps tools to inject execution context when they support it.

Per UAP-1.0 Section 8.4, tools that accept a second parameter should receive
execution context including agentId, stateId, and sub-agent event callbacks.
This function wraps an array of tools to automatically inject this context
when the tool's `run` function has arity > 1.

This enables:
- **Sub-agent model/config inheritance**: Tools can create sub-agents that
  inherit configuration from the parent agent
- **Execution hierarchy tracking**: The agentId and stateId enable tracing
  through nested agent executions
- **Sub-agent event propagation**: Tools can emit events about sub-agent
  lifecycle that bubble up to the parent

## Parameters

### tools

`Tool`\<`unknown`, `unknown`\>[]

Original tool array to wrap

### context

[`ExecutionContext`](../interfaces/executioncontext.md)

Execution context from the agent

### options

[`InjectToolContextOptions`](../interfaces/injecttoolcontextoptions.md) = `{}`

Additional options like event callbacks

## Returns

`Tool`\<`unknown`, `unknown`\>[]

New array of wrapped tools with context injection

## Example

```typescript
import { injectToolContext } from '@providerprotocol/agents/execution';

// In an execution strategy
const wrappedTools = injectToolContext(tools, context, {
  onSubagentEvent: (event) => {
    // Handle sub-agent events (start, inner events, end)
    if (event.type === 'subagent_start') {
      console.log(`Sub-agent ${event.subagentId} started`);
    }
  },
});

// Create LLM with wrapped tools
const llmWithContext = llm({ model, tools: wrappedTools });
```

## See

 - UAP-1.0 Spec Section 8.4
 - [ToolExecutionContext](../interfaces/toolexecutioncontext.md) for the context structure
 - [isContextAwareTool](iscontextawaretool.md) to check if a tool accepts context
