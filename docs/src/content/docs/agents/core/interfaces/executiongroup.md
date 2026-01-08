---
title: "Interface: ExecutionGroup"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ExecutionGroup

# Interface: ExecutionGroup

Defined in: [src/execution/tool-ordering.ts:14](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L14)

Represents a group of tool calls that can execute together.

Execution groups are created by [orderToolCalls](../functions/ordertoolcalls.md) to organize
tool calls for efficient execution while respecting dependencies.
Groups marked as barriers must execute sequentially (one call at a time),
while non-barrier groups can execute all calls in parallel.

## See

[orderToolCalls](../functions/ordertoolcalls.md) for the function that creates these groups

## Properties

### calls

> **calls**: `ToolCall`[]

Defined in: [src/execution/tool-ordering.ts:16](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L16)

Tool calls in this group that can execute together

***

### isBarrier

> **isBarrier**: `boolean`

Defined in: [src/execution/tool-ordering.ts:22](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L22)

Whether this group contains a sequential tool (acts as barrier).
When true, calls in this group execute one at a time.
When false, all calls can execute in parallel.
