---
title: "Interface: ToolExecutionContext"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ToolExecutionContext

# Interface: ToolExecutionContext

Defined in: [src/execution/types.ts:700](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L700)

Context injected into tools during execution.

Per UAP-1.0 Section 8.4, ExecutionStrategy MUST inject this context
when invoking tools that accept a second parameter. This enables
tools to inherit agent configuration and propagate sub-agent events.

## See

UAP-1.0 Spec Section 8.4

## Example

```typescript
// Tool implementation receiving context
const myTool: Tool = {
  name: 'my_tool',
  description: 'Tool that uses execution context',
  parameters: { type: 'object', properties: {} },
  run: async (params, context?: ToolExecutionContext) => {
    console.log('Executing in agent:', context?.agentId);
    if (context?.onSubagentEvent) {
      // Can spawn sub-agents and propagate events
    }
    return 'result';
  },
};
```

## Properties

### agentId

> **agentId**: `string`

Defined in: [src/execution/types.ts:702](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L702)

Agent instance ID for context inheritance

***

### onSubagentEvent?

> `optional` **onSubagentEvent**: [`OnSubagentEvent`](../type-aliases/onsubagentevent.md)

Defined in: [src/execution/types.ts:708](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L708)

Callback for propagating sub-agent events to parent

***

### stateId

> **stateId**: `string`

Defined in: [src/execution/types.ts:704](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L704)

Current state snapshot ID for tracing

***

### toolCallId

> **toolCallId**: `string`

Defined in: [src/execution/types.ts:706](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L706)

Tool call ID from the model response
