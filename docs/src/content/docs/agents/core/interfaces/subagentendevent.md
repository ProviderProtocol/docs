---
title: "Interface: SubagentEndEvent"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / SubagentEndEvent

# Interface: SubagentEndEvent

Defined in: [src/execution/types.ts:616](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L616)

Event emitted when a sub-agent completes execution.

Contains success/failure status, the result or error message,
tool executions performed, and token usage statistics.

## Extends

- [`SubagentEventBase`](subagenteventbase.md)

## Properties

### error?

> `optional` **error**: `string`

Defined in: [src/execution/types.ts:624](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L624)

Error message (if failed)

***

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/execution/types.ts:579](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L579)

The parent tool call ID that spawned this sub-agent

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`parentToolCallId`](subagenteventbase.md#parenttoolcallid)

***

### result?

> `optional` **result**: `string`

Defined in: [src/execution/types.ts:622](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L622)

Sub-agent's response text (if successful)

***

### subagentId

> **subagentId**: `string`

Defined in: [src/execution/types.ts:575](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L575)

Unique ID of the sub-agent instance

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`subagentId`](subagenteventbase.md#subagentid)

***

### subagentType

> **subagentType**: `string`

Defined in: [src/execution/types.ts:577](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L577)

Type/name of the sub-agent (e.g., 'explorer', 'planner')

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`subagentType`](subagenteventbase.md#subagenttype)

***

### success

> **success**: `boolean`

Defined in: [src/execution/types.ts:620](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L620)

Whether the sub-agent completed successfully

***

### timestamp

> **timestamp**: `number`

Defined in: [src/execution/types.ts:626](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L626)

End timestamp in milliseconds since epoch

***

### toolExecutions?

> `optional` **toolExecutions**: `object`[]

Defined in: [src/execution/types.ts:628](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L628)

Tools used by the sub-agent during execution

#### arguments

> **arguments**: `Record`\<`string`, `unknown`\>

#### result

> **result**: `string`

#### toolName

> **toolName**: `string`

***

### type

> **type**: `"subagent_end"`

Defined in: [src/execution/types.ts:618](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L618)

Event type discriminator

***

### usage?

> `optional` **usage**: `TokenUsage`

Defined in: [src/execution/types.ts:634](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L634)

Token usage for this sub-agent run
