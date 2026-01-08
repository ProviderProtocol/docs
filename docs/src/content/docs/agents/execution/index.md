---
title: "execution"
---

[**@providerprotocol/agents**](../index.md)

***

[@providerprotocol/agents](./index.md) / execution

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

Re-exports [AgentStrategy](../core/interfaces/agentstrategy.md)

***

### AgentStreamEvent

Re-exports [AgentStreamEvent](../core/interfaces/agentstreamevent.md)

***

### AgentStreamResult

Re-exports [AgentStreamResult](../core/interfaces/agentstreamresult.md)

***

### ContextAwareToolRun

Re-exports [ContextAwareToolRun](../core/type-aliases/contextawaretoolrun.md)

***

### executeOrderedToolCalls

Re-exports [executeOrderedToolCalls](../core/functions/executeorderedtoolcalls.md)

***

### ExecutionContext

Re-exports [ExecutionContext](../core/interfaces/executioncontext.md)

***

### ExecutionGroup

Re-exports [ExecutionGroup](../core/interfaces/executiongroup.md)

***

### ExecutionResult

Re-exports [ExecutionResult](../core/interfaces/executionresult.md)

***

### ExecutionStrategy

Re-exports [ExecutionStrategy](../core/interfaces/executionstrategy.md)

***

### GenerateResult

Re-exports [GenerateResult](../core/interfaces/generateresult.md)

***

### hasCallDependencies

Re-exports [hasCallDependencies](../core/functions/hascalldependencies.md)

***

### hasToolDependencies

Re-exports [hasToolDependencies](../core/functions/hastooldependencies.md)

***

### injectToolContext

Re-exports [injectToolContext](../core/functions/injecttoolcontext.md)

***

### InjectToolContextOptions

Re-exports [InjectToolContextOptions](../core/interfaces/injecttoolcontextoptions.md)

***

### isContextAwareTool

Re-exports [isContextAwareTool](../core/functions/iscontextawaretool.md)

***

### LoopOptions

Re-exports [LoopOptions](../core/interfaces/loopoptions.md)

***

### OnSubagentEvent

Re-exports [OnSubagentEvent](../core/type-aliases/onsubagentevent.md)

***

### OrderedToolCall

Re-exports [OrderedToolCall](../core/interfaces/orderedtoolcall.md)

***

### orderToolCalls

Re-exports [orderToolCalls](../core/functions/ordertoolcalls.md)

***

### PlanOptions

Re-exports [PlanOptions](../core/interfaces/planoptions.md)

***

### ReactOptions

Re-exports [ReactOptions](../core/interfaces/reactoptions.md)

***

### SubagentEndEvent

Re-exports [SubagentEndEvent](../core/interfaces/subagentendevent.md)

***

### SubagentEvent

Re-exports [SubagentEvent](../core/type-aliases/subagentevent.md)

***

### SubagentEventBase

Re-exports [SubagentEventBase](../core/interfaces/subagenteventbase.md)

***

### SubagentEventType

Re-exports [SubagentEventType](../core/type-aliases/subagenteventtype.md)

***

### SubagentInnerEvent

Re-exports [SubagentInnerEvent](../core/interfaces/subagentinnerevent.md)

***

### SubagentStartEvent

Re-exports [SubagentStartEvent](../core/interfaces/subagentstartevent.md)

***

### ToolDependencyOptions

Re-exports [ToolDependencyOptions](../core/interfaces/tooldependencyoptions.md)

***

### ToolExecutionContext

Re-exports [ToolExecutionContext](../core/interfaces/toolexecutioncontext.md)

***

### ToolExecutionResult

Re-exports [ToolExecutionResult](../core/interfaces/toolexecutionresult.md)

***

### ToolExecutor

Re-exports [ToolExecutor](../core/type-aliases/toolexecutor.md)

***

### ToolWithDependencies

Re-exports [ToolWithDependencies](../core/interfaces/toolwithdependencies.md)

***

### UAPEventType

Re-exports [UAPEventType](../core/type-aliases/uapeventtype.md)

***

### withToolContext

Re-exports [withToolContext](../core/functions/withtoolcontext.md)
