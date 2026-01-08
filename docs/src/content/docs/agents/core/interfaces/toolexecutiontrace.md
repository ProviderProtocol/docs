---
title: "Interface: ToolExecutionTrace"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / ToolExecutionTrace

# Interface: ToolExecutionTrace

Defined in: [src/state/types.ts:25](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L25)

A single tool execution trace from a sub-agent.

Captures the details of a tool invocation during sub-agent execution,
enabling debugging, auditing, and replay of agent behavior.

## Remarks

Conforms to UAP specification Section 8.8 for sub-agent tracing.

## See

[SubagentExecutionTrace](SubagentExecutionTrace.md) for the parent trace containing these records

## Properties

### arguments

> **arguments**: `Record`\<`string`, `unknown`\>

Defined in: [src/state/types.ts:33](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L33)

Arguments passed to the tool as key-value pairs

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/state/types.ts:42](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L42)

Execution duration in milliseconds

***

### isError?

> `optional` **isError**: `boolean`

Defined in: [src/state/types.ts:39](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L39)

Whether the tool execution resulted in an error

***

### result

> **result**: `string`

Defined in: [src/state/types.ts:36](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L36)

Stringified result returned by the tool

***

### toolCallId?

> `optional` **toolCallId**: `string`

Defined in: [src/state/types.ts:30](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L30)

Unique identifier for this tool call, used for correlation with tool results

***

### toolName

> **toolName**: `string`

Defined in: [src/state/types.ts:27](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/state/types.ts#L27)

Name of the tool that was invoked
