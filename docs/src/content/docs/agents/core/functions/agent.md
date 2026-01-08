---
title: "Function: agent()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / agent

# Function: agent()

> **agent**(`options`): [`Agent`](../interfaces/agent.md)

Defined in: [src/agent/index.ts:86](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/agent/index.ts#L86)

Creates a new agent instance with the specified configuration.

The agent factory function is the primary entry point for creating AI agents
in the Unified Agent Protocol (UAP). It combines an LLM from `@providerprotocol/ai`
with UAP-specific features like state management, middleware, and execution strategies.

## Parameters

### options

[`AgentOptions`](../interfaces/agentoptions.md)

Agent configuration options including model, tools, system prompt,
                 execution strategy, middleware, and checkpointing configuration

## Returns

[`Agent`](../interfaces/agent.md)

A configured Agent instance ready for execution

## Remarks

The agent function performs the following setup:
1. Generates a unique agent ID (UUIDv4)
2. Optionally generates a session ID for checkpointing
3. Creates the underlying LLM instance with full UPP passthrough
4. Configures the middleware pipeline
5. Sets up the execution strategy (defaults to `loop()`)

## Examples

Basic agent creation:
```typescript
import { agent, AgentState } from '@providerprotocol/agents';
import { anthropic } from '@providerprotocol/ai/anthropic';

const myAgent = agent({
  model: anthropic('claude-sonnet-4-20250514'),
  system: 'You are a helpful assistant.',
});

const state = AgentState.initial();
const { turn, state: newState } = await myAgent.generate('Hello', state);
```

Agent with tools and middleware:
```typescript
import { agent } from '@providerprotocol/agents';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { loop } from '@providerprotocol/agents/execution';
import { withContext } from '@providerprotocol/agents/middleware';

const coder = agent({
  model: anthropic('claude-sonnet-4-20250514'),
  tools: [Bash, Read, Write],
  system: 'You are a coding assistant.',
  execution: loop({ maxIterations: 20 }),
  middleware: [withContext({ maxTokens: 100000 })],
});
```

## See

 - [Agent](../interfaces/agent.md) for the returned interface
 - [AgentOptions](../interfaces/agentoptions.md) for all configuration options
