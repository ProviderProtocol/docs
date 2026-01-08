---
title: "index"
---

[**@providerprotocol/agents**](../README.md)

***

[@providerprotocol/agents](../modules.md) / index

# index

@providerprotocol/agents - Unified Agent Protocol (UAP) 1.0 Implementation

UAP provides agent abstractions built on @providerprotocol/ai (UPP-1.2):
- Functional state management with immutable AgentState
- Decoupled execution strategies (loop, react, plan)
- Middleware pipeline for cross-cutting concerns
- Thread trees for branching conversations

Core Philosophy: "UAP is a pipe, not a nanny."
The protocol provides orchestration primitives; the developer provides the constraints.

## Example

```typescript
import { agent, AgentState } from '@providerprotocol/agents';
import { react } from '@providerprotocol/agents/execution';
import { logging } from '@providerprotocol/agents/middleware';
import { anthropic } from '@providerprotocol/ai/anthropic';

const coder = agent({
  model: anthropic('claude-sonnet-4-20250514'),
  execution: react(),
  tools: [Bash, Read, Write],
  system: 'You are an expert software engineer.',
  middleware: [logging({ level: 'info' })],
});

const state = AgentState.initial();
const { turn, state: newState } = await coder.generate('Fix the bug', state);
console.log(turn.response.text);
```

## Classes

- [AgentState](classes/AgentState.md)

## Interfaces

- [Agent](interfaces/Agent.md)
- [AgentOptions](interfaces/AgentOptions.md)
- [AgentRef](interfaces/AgentRef.md)
- [AgentStateInterface](interfaces/AgentStateInterface.md)
- [AgentStateJSON](interfaces/AgentStateJSON.md)
- [AgentStrategy](interfaces/AgentStrategy.md)
- [AgentStreamEvent](interfaces/AgentStreamEvent.md)
- [AgentStreamResult](interfaces/AgentStreamResult.md)
- [CheckpointData](interfaces/CheckpointData.md)
- [CheckpointMetadata](interfaces/CheckpointMetadata.md)
- [CheckpointStore](interfaces/CheckpointStore.md)
- [CreateSubAgentToolOptions](interfaces/CreateSubAgentToolOptions.md)
- [ExecutionContext](interfaces/ExecutionContext.md)
- [ExecutionGroup](interfaces/ExecutionGroup.md)
- [ExecutionPlan](interfaces/ExecutionPlan.md)
- [ExecutionResult](interfaces/ExecutionResult.md)
- [ExecutionStrategy](interfaces/ExecutionStrategy.md)
- [FileCheckpointOptions](interfaces/FileCheckpointOptions.md)
- [GenerateResult](interfaces/GenerateResult.md)
- [InjectToolContextOptions](interfaces/InjectToolContextOptions.md)
- [LoggingOptions](interfaces/LoggingOptions.md)
- [LoopOptions](interfaces/LoopOptions.md)
- [Middleware](interfaces/Middleware.md)
- [MiddlewareContext](interfaces/MiddlewareContext.md)
- [OrderedToolCall](interfaces/OrderedToolCall.md)
- [PlanOptions](interfaces/PlanOptions.md)
- [PlanStep](interfaces/PlanStep.md)
- [ReactOptions](interfaces/ReactOptions.md)
- [SubagentEndEvent](interfaces/SubagentEndEvent.md)
- [SubagentEventBase](interfaces/SubagentEventBase.md)
- [SubagentExecutionTrace](interfaces/SubagentExecutionTrace.md)
- [SubagentExecutionTraceJSON](interfaces/SubagentExecutionTraceJSON.md)
- [SubagentInnerEvent](interfaces/SubagentInnerEvent.md)
- [SubagentStartEvent](interfaces/SubagentStartEvent.md)
- [ThreadNodeJSON](interfaces/ThreadNodeJSON.md)
- [ThreadTreeJSON](interfaces/ThreadTreeJSON.md)
- [ToolDependencyOptions](interfaces/ToolDependencyOptions.md)
- [ToolExecutionContext](interfaces/ToolExecutionContext.md)
- [ToolExecutionResult](interfaces/ToolExecutionResult.md)
- [ToolExecutionTrace](interfaces/ToolExecutionTrace.md)
- [ToolWithDependencies](interfaces/ToolWithDependencies.md)

## Type Aliases

- [ContextAwareToolRun](type-aliases/ContextAwareToolRun.md)
- [OnSubagentEvent](type-aliases/OnSubagentEvent.md)
- [PlanStepStatus](type-aliases/PlanStepStatus.md)
- [SubagentEvent](type-aliases/SubagentEvent.md)
- [SubagentEventType](type-aliases/SubagentEventType.md)
- [SubAgentToolRun](type-aliases/SubAgentToolRun.md)
- [ToolExecutor](type-aliases/ToolExecutor.md)
- [UAPEventType](type-aliases/UAPEventType.md)

## Functions

- [agent](functions/agent.md)
- [createSubAgentTool](functions/createSubAgentTool.md)
- [executeOrderedToolCalls](functions/executeOrderedToolCalls.md)
- [hasCallDependencies](functions/hasCallDependencies.md)
- [hasToolDependencies](functions/hasToolDependencies.md)
- [injectToolContext](functions/injectToolContext.md)
- [isContextAwareTool](functions/isContextAwareTool.md)
- [orderToolCalls](functions/orderToolCalls.md)
- [withToolContext](functions/withToolContext.md)

## References

### ThreadNode

Re-exports [ThreadNode](../thread-tree/classes/ThreadNode.md)

***

### ThreadTree

Re-exports [ThreadTree](../thread-tree/classes/ThreadTree.md)
