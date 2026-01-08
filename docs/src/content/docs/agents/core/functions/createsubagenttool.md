---
title: "Function: createSubAgentTool()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / createSubAgentTool

# Function: createSubAgentTool()

> **createSubAgentTool**(`options`): `Tool`

Defined in: [src/subagent/index.ts:209](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/subagent/index.ts#L209)

Creates a UPP Tool from a UAP Agent with full event propagation.

This function wraps an agent as a tool that can be invoked by a parent agent,
enabling hierarchical agent architectures. The resulting tool handles all
event propagation automatically.

Per UAP-1.0 Section 8.7, this helper:
1. Emits `subagent_start` before execution begins
2. Forwards inner events during streaming execution (when `stream: true`)
3. Emits `subagent_end` after completion (success or failure)
4. Provides execution context to sub-agent for tracing

The created tool accepts an optional `ToolExecutionContext` as a second
parameter, which is injected by `injectToolContext()` during execution.

## Parameters

### options

[`CreateSubAgentToolOptions`](../interfaces/createsubagenttooloptions.md)

Configuration for the sub-agent tool

## Returns

`Tool`

A Tool definition that executes the sub-agent when called

## Throws

Re-throws any error from the sub-agent after emitting a `subagent_end` event with `success: false`

## Examples

```typescript
const summarizer = agent({
  model: anthropic('claude-haiku-4-20250514'),
  system: 'You summarize text concisely.',
});

const summarizerTool = createSubAgentTool({
  agent: summarizer,
  name: 'summarize',
  description: 'Summarize the given text',
  parameters: {
    type: 'object',
    properties: {
      text: { type: 'string', description: 'Text to summarize' },
      maxLength: { type: 'number', description: 'Max summary length' },
    },
    required: ['text'],
  },
  buildPrompt: (params) =>
    `Summarize this in ${params.maxLength ?? 100} words:\n\n${params.text}`,
  subagentType: 'summarizer',
});

// Use in a parent agent
const parentAgent = agent({
  model: anthropic('claude-sonnet-4-20250514'),
  tools: [summarizerTool],
});
```

```typescript
const tool = createSubAgentTool({
  agent: myAgent,
  name: 'helper',
  description: 'A helper agent',
  parameters: { type: 'object', properties: {} },
  buildPrompt: (params) => params.task as string,
  stream: false, // Only emit start/end events, no inner events
});
```

## See

[CreateSubAgentToolOptions](../interfaces/createsubagenttooloptions.md) for configuration details
