---
title: "Function: react()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [execution](../index.md) / react

# Function: react()

> **react**(`options`): [`ExecutionStrategy`](../../core/interfaces/executionstrategy.md)

Defined in: [src/execution/react.ts:78](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/react.ts#L78)

Creates a ReAct (Reason-Act-Observe) execution strategy for agent execution.

The ReAct strategy implements the Reason-Act-Observe pattern from the paper
"ReAct: Synergizing Reasoning and Acting in Language Models". It adds an
explicit reasoning phase before each action, which improves the model's
decision-making by encouraging step-by-step thinking.

The execution cycle is:
1. **Reason**: LLM outputs reasoning about what to do next
2. **Act**: LLM selects and executes tool(s) based on reasoning
3. **Observe**: Tool results are formatted as observations
4. **Repeat**: Continue until stop condition, no more actions, or maxSteps

This strategy is ideal for complex tasks requiring careful deliberation
and multi-step reasoning.

## Parameters

### options

[`ReactOptions`](../../core/interfaces/reactoptions.md) = `{}`

Configuration options for the ReAct strategy

## Returns

[`ExecutionStrategy`](../../core/interfaces/executionstrategy.md)

An ExecutionStrategy instance implementing the ReAct pattern

## Example

```typescript
import { createAgent, react } from '@providerprotocol/agents';

// Basic ReAct agent
const agent = createAgent({
  llm: myLLM,
  tools: [searchTool, calculatorTool],
  strategy: react(),
});

// With custom reasoning prompt and step limit
const customAgent = createAgent({
  llm: myLLM,
  tools: [searchTool],
  strategy: react({
    maxSteps: 10,
    reasoningPrompt: 'Analyze the situation and determine the best action.',
  }),
});

// With lifecycle hooks for observability
const observableAgent = createAgent({
  llm: myLLM,
  tools: [searchTool],
  strategy: react({ maxSteps: 5 }),
  hooks: {
    onReason: (step, reasoning) => console.log(`Step ${step} reasoning:`, reasoning),
    onAct: (step, actions) => console.log(`Step ${step} actions:`, actions),
  },
});
```

## See

 - https://arxiv.org/abs/2210.03629 - ReAct: Synergizing Reasoning and Acting
 - [loop](loop.md) for simpler tool-loop execution
 - [plan](plan.md) for structured multi-step execution
