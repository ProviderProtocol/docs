---
title: "execution"
---

[**@providerprotocol/agents**](../README.md)

***

[@providerprotocol/agents](../modules.md) / execution

# execution

Execution module for AI agent strategies.

This module provides execution strategies that define HOW an agent executes,
including tool orchestration, reasoning patterns, and state management.

## Execution Strategies

Three built-in strategies are provided:

- **loop()** - Simple tool loop, equivalent to UPP's native behavior.
  Ideal for straightforward tool-use scenarios.

- **react()** - ReAct (Reason-Act-Observe) pattern with explicit reasoning.
  Best for complex tasks requiring step-by-step deliberation.

- **plan()** - Plan-then-execute with structured step dependencies.
  Suitable for multi-step tasks with interdependencies.

## Tool Ordering (UAP-1.0 Section 8.5, 8.6)

Tools can declare execution dependencies:
- `sequential: true` - Tool must complete before others start
- `dependsOn: ['tool_name']` - Wait for named tools to complete

Tool calls can specify ordering hints:
- `after: ['call_id']` - Wait for specific calls to complete

## Tool Context Injection (UAP-1.0 Section 8.4)

Tools that accept a second parameter receive execution context,
enabling sub-agent spawning and event propagation.

## Example

```typescript
import {
  loop,
  react,
  plan,
  orderToolCalls,
  injectToolContext,
} from '@providerprotocol/agents/execution';

// Use a strategy
const agent = createAgent({
  llm: myLLM,
  strategy: react({ maxSteps: 10 }),
});

// Order tool calls manually
const groups = orderToolCalls(toolCalls, tools);
```

## Functions

- [loop](functions/loop.md)
- [plan](functions/plan.md)
- [react](functions/react.md)

## References

### AgentStrategy

Re-exports [AgentStrategy](../index/interfaces/AgentStrategy.md)

***

### AgentStreamEvent

Re-exports [AgentStreamEvent](../index/interfaces/AgentStreamEvent.md)

***

### AgentStreamResult

Re-exports [AgentStreamResult](../index/interfaces/AgentStreamResult.md)

***

### ContextAwareToolRun

Re-exports [ContextAwareToolRun](../index/type-aliases/ContextAwareToolRun.md)

***

### executeOrderedToolCalls

Re-exports [executeOrderedToolCalls](../index/functions/executeOrderedToolCalls.md)

***

### ExecutionContext

Re-exports [ExecutionContext](../index/interfaces/ExecutionContext.md)

***

### ExecutionGroup

Re-exports [ExecutionGroup](../index/interfaces/ExecutionGroup.md)

***

### ExecutionResult

Re-exports [ExecutionResult](../index/interfaces/ExecutionResult.md)

***

### ExecutionStrategy

Re-exports [ExecutionStrategy](../index/interfaces/ExecutionStrategy.md)

***

### GenerateResult

Re-exports [GenerateResult](../index/interfaces/GenerateResult.md)

***

### hasCallDependencies

Re-exports [hasCallDependencies](../index/functions/hasCallDependencies.md)

***

### hasToolDependencies

Re-exports [hasToolDependencies](../index/functions/hasToolDependencies.md)

***

### injectToolContext

Re-exports [injectToolContext](../index/functions/injectToolContext.md)

***

### InjectToolContextOptions

Re-exports [InjectToolContextOptions](../index/interfaces/InjectToolContextOptions.md)

***

### isContextAwareTool

Re-exports [isContextAwareTool](../index/functions/isContextAwareTool.md)

***

### LoopOptions

Re-exports [LoopOptions](../index/interfaces/LoopOptions.md)

***

### OnSubagentEvent

Re-exports [OnSubagentEvent](../index/type-aliases/OnSubagentEvent.md)

***

### OrderedToolCall

Re-exports [OrderedToolCall](../index/interfaces/OrderedToolCall.md)

***

### orderToolCalls

Re-exports [orderToolCalls](../index/functions/orderToolCalls.md)

***

### PlanOptions

Re-exports [PlanOptions](../index/interfaces/PlanOptions.md)

***

### ReactOptions

Re-exports [ReactOptions](../index/interfaces/ReactOptions.md)

***

### SubagentEndEvent

Re-exports [SubagentEndEvent](../index/interfaces/SubagentEndEvent.md)

***

### SubagentEvent

Re-exports [SubagentEvent](../index/type-aliases/SubagentEvent.md)

***

### SubagentEventBase

Re-exports [SubagentEventBase](../index/interfaces/SubagentEventBase.md)

***

### SubagentEventType

Re-exports [SubagentEventType](../index/type-aliases/SubagentEventType.md)

***

### SubagentInnerEvent

Re-exports [SubagentInnerEvent](../index/interfaces/SubagentInnerEvent.md)

***

### SubagentStartEvent

Re-exports [SubagentStartEvent](../index/interfaces/SubagentStartEvent.md)

***

### ToolDependencyOptions

Re-exports [ToolDependencyOptions](../index/interfaces/ToolDependencyOptions.md)

***

### ToolExecutionContext

Re-exports [ToolExecutionContext](../index/interfaces/ToolExecutionContext.md)

***

### ToolExecutionResult

Re-exports [ToolExecutionResult](../index/interfaces/ToolExecutionResult.md)

***

### ToolExecutor

Re-exports [ToolExecutor](../index/type-aliases/ToolExecutor.md)

***

### ToolWithDependencies

Re-exports [ToolWithDependencies](../index/interfaces/ToolWithDependencies.md)

***

### UAPEventType

Re-exports [UAPEventType](../index/type-aliases/UAPEventType.md)

***

### withToolContext

Re-exports [withToolContext](../index/functions/withToolContext.md)
