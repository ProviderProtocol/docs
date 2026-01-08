---
title: "Type Alias: SubAgentToolRun()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / SubAgentToolRun

# Type Alias: SubAgentToolRun()

> **SubAgentToolRun** = (`params`, `context?`) => `Promise`\<`string`\>

Defined in: [src/subagent/index.ts:421](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/subagent/index.ts#L421)

Function signature for a sub-agent tool's run method.

This type represents the shape of the `run` function created by
[createSubAgentTool](../functions/createsubagenttool.md). It accepts the tool parameters and an optional
execution context that provides event propagation capabilities.

## Parameters

### params

`Record`\<`string`, `unknown`\>

The tool parameters as defined by the tool's JSON Schema

### context?

[`ToolExecutionContext`](../interfaces/toolexecutioncontext.md)

Optional execution context for event propagation and tracing

## Returns

`Promise`\<`string`\>

A promise resolving to the sub-agent's text response

## Example

```typescript
// Type-safe tool invocation
const tool = createSubAgentTool({ ... });
const run = tool.run as SubAgentToolRun;

const result = await run(
  { query: 'search term' },
  { toolCallId: 'call_123', onSubagentEvent: handleEvent }
);
```
