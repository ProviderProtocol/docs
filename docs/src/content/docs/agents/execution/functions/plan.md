---
title: "Function: plan()"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [execution](../README.md) / plan

# Function: plan()

> **plan**(`options`): [`ExecutionStrategy`](../../index/interfaces/ExecutionStrategy.md)

Defined in: [src/execution/plan.ts:102](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/plan.ts#L102)

Creates a plan-then-execute strategy for agent execution.

The plan strategy implements a two-phase approach:
1. **Planning Phase**: LLM generates a structured plan with steps and dependencies
2. **Execution Phase**: Execute each plan step in topological order respecting dependencies

If a step fails and `allowReplan` is true, the strategy can generate a new plan
to recover from the failure (replanning is not yet fully implemented).

This strategy is ideal for complex multi-step tasks where the execution order
matters and steps may have dependencies on each other.

## Parameters

### options

[`PlanOptions`](../../index/interfaces/PlanOptions.md) = `{}`

Configuration options for the plan strategy

## Returns

[`ExecutionStrategy`](../../index/interfaces/ExecutionStrategy.md)

An ExecutionStrategy instance implementing the plan-then-execute pattern

## Example

```typescript
import { createAgent, plan } from '@providerprotocol/agents';

// Basic plan-based agent
const agent = createAgent({
  llm: myLLM,
  tools: [readFileTool, writeFileTool, searchTool],
  strategy: plan(),
});

// With step limit and replanning
const robustAgent = createAgent({
  llm: myLLM,
  tools: [apiTool, dbTool],
  strategy: plan({
    maxPlanSteps: 10,
    allowReplan: true,
  }),
});

// Execute a complex task
const result = await agent.generate(
  'Read config.json, update the version, and write it back'
);
console.log(result.state.plan); // Shows executed plan steps
```

## See

 - [loop](loop.md) for simpler tool-loop execution
 - [react](react.md) for reasoning-enhanced execution
