---
title: "index"
---

[**@providerprotocol/agents**](../index.md)

***

[@providerprotocol/agents](./index.md) / index

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

- [AgentState](classes/agentstate.md)

## Interfaces

- [Agent](interfaces/agent.md)
- [AgentOptions](interfaces/agentoptions.md)
- [AgentRef](interfaces/agentref.md)
- [AgentStateInterface](interfaces/agentstateinterface.md)
- [AgentStateJSON](interfaces/agentstatejson.md)
- [AgentStrategy](interfaces/agentstrategy.md)
- [AgentStreamEvent](interfaces/agentstreamevent.md)
- [AgentStreamResult](interfaces/agentstreamresult.md)
- [CheckpointData](interfaces/checkpointdata.md)
- [CheckpointMetadata](interfaces/checkpointmetadata.md)
- [CheckpointStore](interfaces/checkpointstore.md)
- [CreateSubAgentToolOptions](interfaces/createsubagenttooloptions.md)
- [ExecutionContext](interfaces/executioncontext.md)
- [ExecutionGroup](interfaces/executiongroup.md)
- [ExecutionPlan](interfaces/executionplan.md)
- [ExecutionResult](interfaces/executionresult.md)
- [ExecutionStrategy](interfaces/executionstrategy.md)
- [FileCheckpointOptions](interfaces/filecheckpointoptions.md)
- [GenerateResult](interfaces/generateresult.md)
- [InjectToolContextOptions](interfaces/injecttoolcontextoptions.md)
- [LoggingOptions](interfaces/loggingoptions.md)
- [LoopOptions](interfaces/loopoptions.md)
- [Middleware](interfaces/middleware.md)
- [MiddlewareContext](interfaces/middlewarecontext.md)
- [OrderedToolCall](interfaces/orderedtoolcall.md)
- [PlanOptions](interfaces/planoptions.md)
- [PlanStep](interfaces/planstep.md)
- [ReactOptions](interfaces/reactoptions.md)
- [SubagentEndEvent](interfaces/subagentendevent.md)
- [SubagentEventBase](interfaces/subagenteventbase.md)
- [SubagentExecutionTrace](interfaces/subagentexecutiontrace.md)
- [SubagentExecutionTraceJSON](interfaces/subagentexecutiontracejson.md)
- [SubagentInnerEvent](interfaces/subagentinnerevent.md)
- [SubagentStartEvent](interfaces/subagentstartevent.md)
- [ThreadNodeJSON](interfaces/threadnodejson.md)
- [ThreadTreeJSON](interfaces/threadtreejson.md)
- [ToolDependencyOptions](interfaces/tooldependencyoptions.md)
- [ToolExecutionContext](interfaces/toolexecutioncontext.md)
- [ToolExecutionResult](interfaces/toolexecutionresult.md)
- [ToolExecutionTrace](interfaces/toolexecutiontrace.md)
- [ToolWithDependencies](interfaces/toolwithdependencies.md)

## Type Aliases

- [ContextAwareToolRun](type-aliases/contextawaretoolrun.md)
- [OnSubagentEvent](type-aliases/onsubagentevent.md)
- [PlanStepStatus](type-aliases/planstepstatus.md)
- [SubagentEvent](type-aliases/subagentevent.md)
- [SubagentEventType](type-aliases/subagenteventtype.md)
- [SubAgentToolRun](type-aliases/subagenttoolrun.md)
- [ToolExecutor](type-aliases/toolexecutor.md)
- [UAPEventType](type-aliases/uapeventtype.md)

## Functions

- [agent](functions/agent.md)
- [createSubAgentTool](functions/createsubagenttool.md)
- [executeOrderedToolCalls](functions/executeorderedtoolcalls.md)
- [hasCallDependencies](functions/hascalldependencies.md)
- [hasToolDependencies](functions/hastooldependencies.md)
- [injectToolContext](functions/injecttoolcontext.md)
- [isContextAwareTool](functions/iscontextawaretool.md)
- [orderToolCalls](functions/ordertoolcalls.md)
- [withToolContext](functions/withtoolcontext.md)

## References

### ThreadNode

Re-exports [ThreadNode](../thread-tree/classes/threadnode.md)

***

### ThreadTree

Re-exports [ThreadTree](../thread-tree/classes/threadtree.md)
