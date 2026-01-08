---
title: "Interface: SubagentInnerEvent"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / SubagentInnerEvent

# Interface: SubagentInnerEvent

Defined in: [src/execution/types.ts:603](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L603)

Event emitted for forwarded events from sub-agent execution.

Wraps inner events from the sub-agent to provide visibility
into nested execution while maintaining the parent context.

## Extends

- [`SubagentEventBase`](SubagentEventBase.md)

## Properties

### innerEvent

> **innerEvent**: [`AgentStreamEvent`](AgentStreamEvent.md)

Defined in: [src/execution/types.ts:607](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L607)

The actual event from the sub-agent

***

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/execution/types.ts:579](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L579)

The parent tool call ID that spawned this sub-agent

#### Inherited from

[`SubagentEventBase`](SubagentEventBase.md).[`parentToolCallId`](SubagentEventBase.md#parenttoolcallid)

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

### type

> **type**: `"subagent_event"`

Defined in: [src/execution/types.ts:605](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L605)

Event type discriminator
