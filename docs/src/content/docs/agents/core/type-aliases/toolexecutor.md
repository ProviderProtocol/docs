---
title: "Type Alias: ToolExecutor()"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / ToolExecutor

# Type Alias: ToolExecutor()

> **ToolExecutor** = (`call`, `tool`) => `Promise`\<`unknown`\>

Defined in: [src/execution/tool-ordering.ts:300](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/tool-ordering.ts#L300)

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
