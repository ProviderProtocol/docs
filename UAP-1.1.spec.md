# UAP-1.1: Unified Agent Protocol Specification

**Version:** 1.1.0
**Status:** Draft
**Built on:** UPP-1.3 (Unified Provider Protocol)
**Authors:** UAP Working Group

---

## Abstract

The Unified Agent Protocol (UAP) is a specification for building AI agents on top of the Unified Provider Protocol (UPP). This document defines the protocol semantics, data structures, and implementation requirements for building UAP-compliant agents, sessions, and execution strategies.

UAP extends UPP with agent-level abstractions including decoupled execution strategies (ReAct, Plan, Loop), functional state management, sub-agent composition, and middleware pipelines. UAP preserves complete type uniformity with UPP, using all types directly without abstraction or re-export.

**Core Philosophy:** UAP is a pipe, not a nanny. The protocol provides orchestration primitives; the developer provides the constraints.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Design Principles](#2-design-principles)
3. [Core Concepts](#3-core-concepts)
4. [Agent Interface](#4-agent-interface)
5. [Execution Strategies](#5-execution-strategies)
6. [State Management](#6-state-management)
7. [Thread Trees](#7-thread-trees)
8. [Sub-Agent Protocol](#8-sub-agent-protocol)
9. [Middleware](#9-middleware)
10. [Strategy Hooks](#10-strategy-hooks)
11. [Streaming](#11-streaming)
12. [Serialization](#12-serialization)
13. [Data Types](#13-data-types)
14. [Conformance](#14-conformance)
15. [Security Considerations](#15-security-considerations)

---

## 1. Introduction

### 1.1 Purpose

AI agents require orchestration beyond simple LLM inference. UAP establishes a standard protocol that:

- Provides agent abstractions built on UPP primitives
- Decouples execution strategies from agent definitions
- Uses functional state management with explicit data flow
- Supports hierarchical agent composition (sub-agents)
- Provides middleware for cross-cutting concerns
- Places full control and responsibility with the developer

### 1.2 Scope

This specification covers:

- The `agent()` function interface
- Execution strategies (`react()`, `plan()`, `loop()`)
- Functional state management
- Thread tree structures for branching conversations
- Sub-agent communication
- Middleware composition
- Serialization and checkpointing

### 1.3 Requirements Language

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [BCP 14](https://www.rfc-editor.org/info/bcp14) [[RFC2119](https://www.rfc-editor.org/rfc/rfc2119)] [[RFC8174](https://www.rfc-editor.org/rfc/rfc8174)] when, and only when, they appear in all capitals, as shown here.

### 1.4 Relationship to UPP

UAP builds on UPP and MUST use the following types directly:

- `llm`, `LLMInstance`, `LLMOptions`
- `Thread`, `Turn`, `TokenUsage`
- `Message`, `UserMessage`, `AssistantMessage`, `ToolResultMessage`
- `Tool`, `ToolCall`, `ToolResult`, `ToolExecution`, `ToolUseStrategy`
- `StreamResult`, `StreamEvent`, `StreamEventType`
- `UPPError`, `ErrorCode`
- All provider factories

UAP MUST NOT re-export, wrap, or abstract these types.

### 1.5 Terminology

| Term | Definition |
|------|------------|
| **Agent** | An AI entity with a model, execution strategy, tools, and optional sub-agents |
| **AgentState** | An immutable snapshot of agent execution state |
| **Step** | A single cycle of an execution strategy |
| **Sub-Agent** | An agent declared as a tool dependency for another agent |
| **Middleware** | A composable function that wraps agent execution |

---

## 2. Design Principles

### 2.1 Type Uniformity with UPP

UAP MUST NOT create abstractions around UPP types. All data flows through standard UPP types directly.

### 2.2 Functional State Management

Agent execution is a pure transformation:

```
(Input, State) → (Turn, NewState)
```

- `AgentState` is immutable—each operation returns a new state
- State is explicitly passed and returned, never mutated internally
- Developer controls what state persists between calls

### 2.3 Decoupled Execution

- Agents define WHAT (model, tools, system prompt)
- Strategies define HOW (ReAct loop, plan-then-execute, simple loop)
- Strategies are interchangeable without changing agent definition

### 2.4 Infinite by Default

UAP SHALL NOT impose artificial execution limits. Defaults:

| Parameter | Default |
|-----------|---------|
| `maxIterations` | `Infinity` |
| `maxSteps` | `Infinity` |
| `toolStrategy.maxIterations` | `Infinity` |
| `timeout` | `undefined` |

Developers who want limits MUST explicitly configure them.

### 2.5 Developer Responsibility

UAP places full control and full responsibility with the developer:

- The protocol provides orchestration primitives
- The developer provides safety constraints
- Runaway agents are a developer concern, not a protocol concern

### 2.6 Explicit Sub-Agent Declaration

Sub-agents are tools. Tools require explicit schemas. Therefore, sub-agents require explicit schemas. UAP MUST NOT auto-generate tool schemas from agent definitions.

---

## 3. Core Concepts

### 3.1 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Application Code                         │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                     ┌─────────────┐
                     │   agent()   │
                     └─────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Middleware Pipeline                        │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   Execution Strategy                         │
│         react()  |  plan()  |  loop()                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      UPP (llm, Turn, Tool, etc.)            │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Import Patterns

```
// Agent SDK imports
import { agent, AgentState } from "agents"
import { react, plan, loop } from "agents/execution"
import { logging } from "agents/middleware"

// UPP imports (used directly, never re-exported)
import { llm, Thread, UserMessage, Tool } from "upp"
import anthropic from "upp/anthropic"
```

### 3.3 Data Flow

```
Input + State₀ → Agent.generate() → Turn + State₁
                      │
                      ├── Middleware.before()
                      ├── Strategy.execute()
                      │       ├── llm.generate()
                      │       └── Tool execution
                      └── Middleware.after()
```

### 3.4 Identity Model

| Entity | ID Type | Description |
|--------|---------|-------------|
| Agent | UUIDv4 | Unique agent instance ID |
| AgentState | UUIDv4 | State snapshot ID (changes on mutation) |
| Session | UUIDv4 | Session identifier for checkpointing |
| Checkpoint | UUIDv4 | Unique checkpoint snapshot ID |

---

## 4. Agent Interface

### 4.1 Function Signature

```
agent(options: AgentOptions) → Agent
```

### 4.2 AgentOptions

`AgentOptions` extends `LLMOptions` from UPP for full passthrough.

**UAP-Specific Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `model` | ModelReference | Yes | Model reference from UPP provider |
| `execution` | ExecutionStrategy | No | Execution strategy (default: `loop()`) |
| `middleware` | List<Middleware> | No | Ordered middleware pipeline |
| `strategy` | AgentStrategy | No | Agent lifecycle hooks |
| `checkpoints` | CheckpointStore | No | Checkpoint store for persistence |
| `sessionId` | String | No | Session identifier |

**LLM Passthrough Fields:** `params`, `config`, `tools`, `system`, `structure`, `toolStrategy`

### 4.3 Agent Interface

| Method | Description |
|--------|-------------|
| `generate(input, state)` | Execute agent, return Turn and new state |
| `stream(input, state)` | Execute with streaming |
| `ask(input, state)` | Multi-turn execution, history preserved |
| `query(input)` | Stateless single-turn execution |

### 4.4 generate()

```
generate(input: String | Message, state: AgentState) → Promise<GenerateResult>

GenerateResult = { turn: Turn, state: AgentState }
```

### 4.5 stream()

```
stream(input: String | Message, state: AgentState) → AgentStreamResult
```

`AgentStreamResult` is an async iterable of `AgentStreamEvent` with a `result` promise.

### 4.6 ask()

Multi-turn execution where history is preserved in state. Appends input to state history, calls `generate()`, appends response to returned state.

### 4.7 query()

Stateless single-turn execution. Creates ephemeral state, executes, discards state.

```
query(input: String | Message) → Promise<Turn>
```

---

## 5. Execution Strategies

### 5.1 ExecutionStrategy Interface

```
interface ExecutionStrategy {
  name: String
  execute(context: ExecutionContext) → Promise<ExecutionResult>
  stream(context: ExecutionContext) → AgentStreamResult
}
```

### 5.2 loop()

The simplest strategy—equivalent to UPP's tool loop behavior.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `maxIterations` | Integer | Infinity | Maximum tool execution rounds |

### 5.3 react()

ReAct (Reason-Act-Observe) loop with explicit reasoning phases.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `maxSteps` | Integer | Infinity | Maximum reason-act-observe cycles |
| `reasoningPrompt` | String | (default) | Prompt for reasoning phase |

**Behavior:**
1. **Reason**: LLM outputs reasoning
2. **Act**: LLM executes tool(s)
3. **Observe**: Tool results formatted as observations
4. Repeat until stop condition or no more actions

### 5.4 plan()

Plan-then-execute strategy with upfront planning phase.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `maxPlanSteps` | Integer | Infinity | Maximum steps in a plan |
| `allowReplan` | Boolean | true | Allow replanning on failure |
| `planSchema` | JSONSchema | (default) | Schema for plan structure |

### 5.5 Custom Strategies

Implementations MUST allow custom execution strategies conforming to the `ExecutionStrategy` interface.

---

## 6. State Management

### 6.1 AgentState Structure

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | State snapshot ID (UUIDv4) |
| `messages` | List<Message> | Conversation history |
| `step` | Integer | Current step number |
| `metadata` | Map | User-defined metadata |
| `reasoning` | List<String> | Reasoning traces (for ReAct) |
| `plan` | List<PlanStep>? | Execution plan (for Plan strategy) |
| `subagentTraces` | List<SubagentTrace>? | Sub-agent execution traces |

### 6.2 State Operations

All operations return new state instances:

| Method | Description |
|--------|-------------|
| `AgentState.initial()` | Create initial state |
| `withMessage(message)` | Append single message |
| `withMessages(messages)` | Append multiple messages |
| `withContext(messages)` | **Replace** entire message history |
| `withStep(step)` | Update step counter |
| `withMetadata(key, value)` | Add metadata |
| `withReasoning(reasoning)` | Add reasoning trace |
| `withPlan(plan)` | Set execution plan |
| `toJSON()` | Serialize state |
| `AgentState.fromJSON(json)` | Deserialize state |

### 6.3 Context Window Management

`withContext(messages)` enables context window management via middleware. UAP does not provide token estimation—developers manage their model's constraints.

**Common Patterns:**
- Prune old tool outputs
- Sliding window (keep N recent messages)
- Summarize old context

---

## 7. Thread Trees

Thread trees provide OPTIONAL tree-structured conversation management built on `AgentState`.

### 7.1 ThreadTree Interface

| Property/Method | Description |
|-----------------|-------------|
| `root` | Root node |
| `current` | Currently active node |
| `branch(fromId, name?)` | Create branch, returns node ID |
| `checkout(nodeId)` | Switch active node |
| `history()` | Get AgentState from root to current |
| `toJSON()` | Serialize tree |

### 7.2 ThreadNode Structure

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Node ID (UUIDv4) |
| `parentId` | String? | Parent node ID |
| `state` | AgentState | State snapshot |
| `name` | String? | Optional branch name |
| `children` | List<String> | Child node IDs |

---

## 8. Sub-Agent Protocol

### 8.1 Sub-Agents Are Tools

Sub-agents are agents used as tools. They are regular UPP Tools with an implementation that calls another agent.

UAP MUST NOT auto-generate tool schemas from agents.

### 8.2 Explicit Tool Declaration

```
explorer = agent({
  model: anthropic("claude-haiku-4-20250514"),
  tools: [Glob, Grep, Read],
})

explorerTool: Tool = {
  name: "explore_codebase",
  description: "Explores codebase structure",
  parameters: {
    type: "object",
    properties: {
      query: { type: "string", description: "What to search for" },
    },
    required: ["query"],
  },
  run: async (params) => {
    turn = await explorer.query(params.query)
    return turn.response.text
  },
}
```

### 8.3 Tool Dependencies

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `sequential` | Boolean | false | Must complete before other tools |
| `dependsOn` | List<String> | [] | Tool names that must complete first |

### 8.4 Sub-Agent Event Propagation

When sub-agents execute via streaming, events SHOULD be propagated to the parent stream.

**Event Types:**

| Type | Description |
|------|-------------|
| `subagent_start` | Sub-agent execution began |
| `subagent_event` | Forwarded event from sub-agent |
| `subagent_end` | Sub-agent execution completed |

### 8.5 Sub-Agent Trace Persistence

Sub-agent execution traces MUST be persisted in `AgentState` for checkpoint recovery.

---

## 9. Middleware

### 9.1 Middleware Interface

```
interface Middleware {
  name: String
  before?(context) → Promise<MiddlewareContext | void>
  after?(context, result) → Promise<GenerateResult>
  onError?(context, error) → Promise<GenerateResult | void>
}
```

### 9.2 Composition

Middleware executes in order for `before`, reverse order for `after`:

```
// Execution order for [first, second, third]:
first.before() → second.before() → third.before()
→ Agent execution →
third.after() → second.after() → first.after()
```

### 9.3 logging() Middleware

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `level` | String | "info" | Log level |
| `logger` | Function | console.log | Custom logger |
| `includeMessages` | Boolean | false | Log full content |
| `includeTiming` | Boolean | true | Log timing |

---

## 10. Strategy Hooks

### 10.1 AgentStrategy

| Hook | Description |
|------|-------------|
| `stopCondition(state)` | Evaluate if execution should stop |
| `onStepStart(step, state)` | Called when step begins |
| `onReason(step, reasoning)` | Called during reasoning (ReAct) |
| `onAct(step, actions)` | Called during action phase |
| `onObserve(step, observations)` | Called during observation |
| `onStepEnd(step, result)` | Called when step completes |
| `onComplete(result)` | Called when execution completes |
| `onError(error, state)` | Called on error |

### 10.2 Stop Conditions

Since UAP defaults to infinite execution, `stopCondition` is the primary termination control:

```
strategy: {
  stopCondition: (state) => {
    if (state.metadata.taskComplete) return true
    if (state.metadata.totalTokens > 50000) return true
    return false
  },
}
```

### 10.3 ToolUseStrategy (UPP Passthrough)

`toolStrategy` passes directly to the underlying `llm()` instance for real-time tool execution hooks. These complement UAP-level `AgentStrategy` hooks:

- `AgentStrategy` hooks fire at step boundaries
- `ToolUseStrategy` hooks fire immediately during tool execution

---

## 11. Streaming

### 11.1 AgentStreamResult

```
interface AgentStreamResult {
  [Symbol.asyncIterator](): AsyncIterator<AgentStreamEvent>
  result: Promise<GenerateResult>
  abort(): void
}
```

### 11.2 AgentStreamEvent

```
interface AgentStreamEvent {
  source: "uap" | "upp"
  uap?: { type: UAPEventType, step: Integer, agentId: String, data: Map }
  upp?: StreamEvent
}
```

**UAPEventType Values:**

`step_start`, `step_end`, `reasoning`, `action`, `observation`, `subagent_start`, `subagent_event`, `subagent_end`

### 11.3 State Completeness

The state returned by `stream.result` MUST include the complete execution history and be identical to what `generate()` would return.

---

## 12. Serialization

### 12.1 AgentState Serialization

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | String | Yes | UAP version |
| `id` | String | Yes | State ID |
| `messages` | List<MessageJSON> | Yes | UPP Message serialization |
| `step` | Integer | Yes | Step number |
| `metadata` | Map | Yes | User metadata |
| `reasoning` | List<String> | No | Reasoning traces |
| `plan` | List<PlanStepJSON> | No | Execution plan |
| `subagentTraces` | List<SubagentTraceJSON> | No | Sub-agent traces |

### 12.2 CheckpointStore Interface

```
interface CheckpointStore {
  save(sessionId, state) → Promise<void>
  load(sessionId) → Promise<AgentStateJSON | null>
  loadMetadata(sessionId) → Promise<CheckpointMetadata | null>
  delete(sessionId) → Promise<void>
  list() → Promise<List<String>>
}
```

### 12.3 Checkpoint Behavior

When `checkpoints` is provided to `agent()`:

1. Checkpoints MUST be saved after each `step_end` event
2. `sessionId` MUST be generated if not provided (UUIDv4)
3. Failed saves SHOULD log errors but MUST NOT throw

### 12.4 fileCheckpoints()

Reference implementation for file-based checkpointing:

```
fileCheckpoints(options?: { dir?: String }) → CheckpointStore
```

Default directory: `.checkpoints`

---

## 13. Data Types

### 13.1 Types from UPP (Used Directly)

`llm`, `LLMInstance`, `LLMOptions`, `ProviderConfig`, `ModelReference`, `Message`, `UserMessage`, `AssistantMessage`, `ToolResultMessage`, `Turn`, `TokenUsage`, `Tool`, `ToolCall`, `ToolResult`, `ToolExecution`, `ToolUseStrategy`, `StreamResult`, `StreamEvent`, `StreamEventType`, `UPPError`, `ErrorCode`, `Thread`, `ThreadJSON`

### 13.2 UAP-Specific Types

**Core:**
- `Agent`, `AgentOptions`, `GenerateResult`
- `AgentState`, `AgentStateJSON`

**Execution:**
- `ExecutionStrategy`, `ExecutionContext`, `ExecutionResult`
- `LoopOptions`, `ReactOptions`, `PlanOptions`, `PlanStep`

**Streaming:**
- `AgentStreamResult`, `AgentStreamEvent`, `UAPEventType`

**Middleware:**
- `Middleware`, `MiddlewareContext`

**Hooks:**
- `AgentStrategy`

**Checkpointing:**
- `CheckpointStore`, `CheckpointMetadata`

**Thread Trees:**
- `ThreadTree`, `ThreadNode`

**Sub-agents:**
- `SubagentExecutionTrace`, `ToolExecutionTrace`

---

## 14. Conformance

### 14.1 Conformance Levels

| Level | Requirements |
|-------|--------------|
| **Core** (Required) | `agent()`, `generate()`, `stream()`, `ask()`, `query()`, `AgentState`, `loop()` |
| **Advanced Execution** (Required) | `react()`, `plan()`, custom strategies, infinite defaults |
| **Thread Trees** (Optional) | `ThreadTree`, branching, checkout, history |
| **Middleware** (Required) | Pipeline, `logging()`, custom middleware |

### 14.2 Requirements Summary

**MUST:**
- Use UPP types directly without wrapping
- NOT re-export UPP types
- Implement immutable `AgentState`
- Default `maxIterations`/`maxSteps`/`toolStrategy.maxIterations` to Infinity
- NOT auto-generate tool schemas from agents
- Use UUIDv4 for all IDs
- Fully serialize state via `toJSON()`
- Extend `LLMOptions` for full UPP passthrough

**MUST NOT:**
- Impose artificial execution limits by default
- Mutate state internally
- Auto-generate sub-agent tool schemas
- Hide conversation history in implicit state

---

## 15. Security Considerations

### 15.1 Developer Responsibility

- **Runaway Agents:** Developer must implement `stopCondition` or explicit limits
- **Resource Exhaustion:** Developer must implement budget middleware
- **Cost Control:** Developer must track token usage

### 15.2 Sub-Agent Security

- Sub-agent tools execute with their `run` function's permissions
- Stop conditions do not automatically propagate to sub-agents

### 15.3 Serialization Security

- Serialized state may contain sensitive data
- State SHOULD be encrypted at rest
- Deserialization MUST validate structure

### 15.4 Tool Execution Security

All UPP tool security considerations apply. Tools with `sequential` or `dependsOn` create execution ordering with potential security implications.

---

## Changelog

### 1.1.0

- Reformatted specification for improved clarity and usability
- Updated RFC 2119 compliance with BCP 14 and RFC 8174 references
- Consolidated scattered MUST/SHOULD requirements into Section 14
- Streamlined conformance requirements into tabular format
- Simplified verbose pseudocode examples throughout
- Consolidated state operations into single table (Section 6.2)
- Removed duplicative Appendix A (Migration) content
- Removed Appendix B (Complete Example) - moved to separate cookbook
- Simplified Section 8 (Sub-Agent Protocol) while preserving semantics
- Consolidated event types into tables rather than prose
- Clarified MUST/SHOULD/MAY usage throughout per RFC 2119/8174
- Reduced specification length while maintaining semantic completeness
- Updated to reference UPP-1.3

### 1.0.0

- Initial approved specification
- `agent()` function with `generate()`, `stream()`, `ask()`, `query()` methods
- Functional `AgentState` with immutable operations
- Execution strategies: `loop()`, `react()`, `plan()`
- Custom strategy support
- Infinite defaults (maxIterations, maxSteps)
- Explicit sub-agent tool declaration (no auto-generation)
- Thread trees for branching conversations
- Middleware pipeline with `logging()` middleware
- Agent strategy hooks (stopCondition, onStep*, etc.)
- ToolUseStrategy passthrough to UPP
- Streaming with UAP and UPP event types
- Sub-agent event propagation
- Sub-agent trace persistence
- Serialization format for AgentState
- Checkpointing with `CheckpointStore` interface
- `fileCheckpoints()` reference implementation
- Complete type uniformity with UPP (no re-exports)
