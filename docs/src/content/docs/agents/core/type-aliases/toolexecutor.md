---
title: "Type Alias: ToolExecutor()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ToolExecutor

# Type Alias: ToolExecutor()

> **ToolExecutor** = (`call`, `tool`) => `Promise`\<`unknown`\>

Defined in: [src/execution/tool-ordering.ts:300](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/tool-ordering.ts#L300)

Function type for executing a single tool call.

Implementations receive the tool call and tool definition,
and should return the result (or throw on error).

## Parameters

### call

`ToolCall`

The tool call to execute

### tool

`Tool`

The tool definition

## Returns

`Promise`\<`unknown`\>

Promise resolving to the tool result
