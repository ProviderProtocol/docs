---
title: "Interface: ToolExecutionResult"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / ToolExecutionResult

# Interface: ToolExecutionResult

Defined in: [src/execution/tool-ordering.ts:277](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L277)

Result of executing a single tool call, including timing and error information.

## See

[executeOrderedToolCalls](../functions/executeorderedtoolcalls.md) for the function that returns these

## Properties

### call

> **call**: `ToolCall`

Defined in: [src/execution/tool-ordering.ts:279](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L279)

The tool call that was executed

***

### duration

> **duration**: `number`

Defined in: [src/execution/tool-ordering.ts:287](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L287)

Execution duration in milliseconds

***

### error?

> `optional` **error**: `string`

Defined in: [src/execution/tool-ordering.ts:285](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L285)

Error message if isError is true

***

### isError

> **isError**: `boolean`

Defined in: [src/execution/tool-ordering.ts:283](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L283)

Whether the tool execution threw an error

***

### result

> **result**: `unknown`

Defined in: [src/execution/tool-ordering.ts:281](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/tool-ordering.ts#L281)

The result returned from the tool (null if error)
