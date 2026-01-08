---
title: "Interface: SubagentStartEvent"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / SubagentStartEvent

# Interface: SubagentStartEvent

Defined in: [src/execution/types.ts:588](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L588)

Event emitted when a sub-agent starts execution.

Contains the prompt given to the sub-agent and the start timestamp
for duration tracking.

## Extends

- [`SubagentEventBase`](SubagentEventBase.md)

## Properties

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/execution/types.ts:579](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L579)

The parent tool call ID that spawned this sub-agent

#### Inherited from

[`SubagentEventBase`](SubagentEventBase.md).[`parentToolCallId`](SubagentEventBase.md#parenttoolcallid)

***

### prompt

> **prompt**: `string`

Defined in: [src/execution/types.ts:592](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L592)

The task/prompt given to the sub-agent

***

### subagentId

> **subagentId**: `string`

Defined in: [src/execution/types.ts:575](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L575)

Unique ID of the sub-agent instance

#### Inherited from

[`SubagentEventBase`](SubagentEventBase.md).[`subagentId`](SubagentEventBase.md#subagentid)

***

### subagentType

> **subagentType**: `string`

Defined in: [src/execution/types.ts:577](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L577)

Type/name of the sub-agent (e.g., 'explorer', 'planner')

#### Inherited from

[`SubagentEventBase`](SubagentEventBase.md).[`subagentType`](SubagentEventBase.md#subagenttype)

***

### timestamp

> **timestamp**: `number`

Defined in: [src/execution/types.ts:594](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L594)

Start timestamp in milliseconds since epoch

***

### type

> **type**: `"subagent_start"`

Defined in: [src/execution/types.ts:590](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L590)

Event type discriminator
