---
title: "Interface: SubagentStartEvent"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / SubagentStartEvent

# Interface: SubagentStartEvent

Defined in: [src/execution/types.ts:588](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L588)

Event emitted when a sub-agent starts execution.

Contains the prompt given to the sub-agent and the start timestamp
for duration tracking.

## Extends

- [`SubagentEventBase`](subagenteventbase.md)

## Properties

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/execution/types.ts:579](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L579)

The parent tool call ID that spawned this sub-agent

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`parentToolCallId`](subagenteventbase.md#parenttoolcallid)

***

### prompt

> **prompt**: `string`

Defined in: [src/execution/types.ts:592](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L592)

The task/prompt given to the sub-agent

***

### subagentId

> **subagentId**: `string`

Defined in: [src/execution/types.ts:575](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L575)

Unique ID of the sub-agent instance

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`subagentId`](subagenteventbase.md#subagentid)

***

### subagentType

> **subagentType**: `string`

Defined in: [src/execution/types.ts:577](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L577)

Type/name of the sub-agent (e.g., 'explorer', 'planner')

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`subagentType`](subagenteventbase.md#subagenttype)

***

### timestamp

> **timestamp**: `number`

Defined in: [src/execution/types.ts:594](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L594)

Start timestamp in milliseconds since epoch

***

### type

> **type**: `"subagent_start"`

Defined in: [src/execution/types.ts:590](https://github.com/ProviderProtocol/agents/blob/5c6a128286d6bfa249e6da183381f66a2be30c64/src/execution/types.ts#L590)

Event type discriminator
