---
title: "Function: loop()"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [execution](../README.md) / loop

# Function: loop()

> **loop**(`options`): [`ExecutionStrategy`](../../index/interfaces/ExecutionStrategy.md)

Defined in: [src/execution/loop.ts:62](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/loop.ts#L62)

Creates a loop execution strategy for agent execution.

The loop strategy is the simplest execution pattern, equivalent to UPP's
native tool loop behavior. It follows this cycle:

1. Send input to LLM
2. If response has tool calls, execute tools and loop
3. Continue until no tool calls or maxIterations reached
4. Return final response as UPP Turn

This strategy is ideal for straightforward tool-use scenarios where the
model naturally knows when to stop calling tools.

## Parameters

### options

[`LoopOptions`](../../index/interfaces/LoopOptions.md) = `{}`

Configuration options for the loop strategy

## Returns

[`ExecutionStrategy`](../../index/interfaces/ExecutionStrategy.md)

An ExecutionStrategy instance implementing the loop pattern

## Example

```typescript
import { createAgent, loop } from '@providerprotocol/agents';

// Basic usage with default settings (unlimited iterations)
const agent = createAgent({
  llm: myLLM,
  tools: [weatherTool, searchTool],
  strategy: loop(),
});

// With iteration limit
const limitedAgent = createAgent({
  llm: myLLM,
  tools: [weatherTool],
  strategy: loop({ maxIterations: 5 }),
});

// Execute
const result = await agent.generate('What is the weather in Tokyo?');
console.log(result.turn.response.text);
```

## See

 - [react](react.md) for reasoning-enhanced execution
 - [plan](plan.md) for structured multi-step execution
