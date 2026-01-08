---
title: "Interface: AgentOptions"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / AgentOptions

# Interface: AgentOptions

Defined in: [src/agent/types.ts:47](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/agent/types.ts#L47)

Configuration options for creating an agent instance.

Extends LLMOptions from `@providerprotocol/ai` for full UPP (Unified Provider Protocol)
passthrough, allowing all provider-specific parameters to be configured.

## Remarks

The agent options combine UAP-specific configuration (execution strategy, middleware,
checkpointing) with UPP LLM configuration (model, params, tools, system prompt).
This enables agents to leverage the full power of the underlying LLM while adding
agentic capabilities like state management and middleware pipelines.

## Example

```typescript
import { agent } from '@providerprotocol/agents';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { loop } from '@providerprotocol/agents/execution';

const options: AgentOptions = {
  model: anthropic('claude-sonnet-4-20250514'),
  params: { max_tokens: 4096 },
  tools: [myTool],
  system: 'You are a helpful assistant.',
  execution: loop({ maxIterations: 10 }),
  middleware: [loggingMiddleware],
};
```

## Extends

- `Partial`\<`Omit`\<`LLMOptions`, `"model"`\>\>

## Properties

### \_llmInstance?

> `optional` **\_llmInstance**: `LLMInstance`\<`unknown`\>

Defined in: [src/agent/types.ts:123](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/agent/types.ts#L123)

**`Internal`**

Pre-created LLM instance for dependency injection.

#### Remarks

Used primarily for testing to inject mock LLM instances. Not intended
for production use.

***

### checkpoints?

> `optional` **checkpoints**: [`CheckpointStore`](CheckpointStore.md)

Defined in: [src/agent/types.ts:104](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/agent/types.ts#L104)

Checkpoint store for step-level state persistence.

#### Remarks

When provided, the agent will persist state checkpoints after each
execution step, enabling recovery and replay capabilities.

#### See

[CheckpointStore](CheckpointStore.md)

***

### config?

> `optional` **config**: `ProviderConfig`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:580

Provider infrastructure configuration (optional - uses env vars if omitted)

#### Inherited from

`Partial.config`

***

### execution?

> `optional` **execution**: [`ExecutionStrategy`](ExecutionStrategy.md)

Defined in: [src/agent/types.ts:72](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/agent/types.ts#L72)

Execution strategy that controls how the agent processes requests.

#### Remarks

The execution strategy determines the control flow of agent execution,
including how tool calls are handled and when to stop iterating.

#### Default Value

`loop()` - Standard agentic loop with tool execution

***

### middleware?

> `optional` **middleware**: [`Middleware`](Middleware.md)[]

Defined in: [src/agent/types.ts:84](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/agent/types.ts#L84)

Ordered middleware pipeline for request/response processing.

#### Remarks

Middleware functions are executed in order for `before` hooks and in
reverse order for `after` hooks. This enables cross-cutting concerns
like logging, context management, and error handling.

#### See

[Middleware](Middleware.md)

***

### model

> **model**: `ModelReference`

Defined in: [src/agent/types.ts:61](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/agent/types.ts#L61)

Model reference from a UPP provider factory.

#### Remarks

Must be created using a provider factory function like `anthropic()`, `openai()`,
`google()`, etc. from `@providerprotocol/ai`.

#### Example

```typescript
import { anthropic } from '@providerprotocol/ai/anthropic';
model: anthropic('claude-sonnet-4-20250514')
```

***

### params?

> `optional` **params**: `unknown`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:582

Model-specific parameters (temperature, max_tokens, etc.)

#### Inherited from

`Partial.params`

***

### sessionId?

> `optional` **sessionId**: `string`

Defined in: [src/agent/types.ts:113](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/agent/types.ts#L113)

Session identifier for checkpointing.

#### Remarks

Per UAP-1.0 Section 3.4, session IDs must be UUIDv4. If not provided
and checkpoints are enabled, a UUIDv4 will be auto-generated.

***

### strategy?

> `optional` **strategy**: [`AgentStrategy`](AgentStrategy.md)

Defined in: [src/agent/types.ts:93](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/agent/types.ts#L93)

Agent lifecycle hooks for customizing execution behavior.

#### Remarks

Strategy hooks provide fine-grained control over the execution loop,
including iteration limits and custom termination conditions.

***

### structure?

> `optional` **structure**: `JSONSchema`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:590

Structured output schema (JSON Schema)

#### Inherited from

`Partial.structure`

***

### system?

> `optional` **system**: `string`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:584

System prompt for all inferences

#### Inherited from

`Partial.system`

***

### tools?

> `optional` **tools**: `Tool`\<`unknown`, `unknown`\>[]

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:586

Tools available to the model

#### Inherited from

`Partial.tools`

***

### toolStrategy?

> `optional` **toolStrategy**: `ToolUseStrategy`

Defined in: node\_modules/@providerprotocol/ai/dist/index.d.ts:588

Tool execution strategy

#### Inherited from

`Partial.toolStrategy`
