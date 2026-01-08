---
title: "Interface: SubagentInnerEvent"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / SubagentInnerEvent

# Interface: SubagentInnerEvent

Defined in: [src/execution/types.ts:603](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L603)

Event emitted for forwarded events from sub-agent execution.

Wraps inner events from the sub-agent to provide visibility
into nested execution while maintaining the parent context.

## Extends

- [`SubagentEventBase`](subagenteventbase.md)

## Properties

### innerEvent

> **innerEvent**: [`AgentStreamEvent`](agentstreamevent.md)

Defined in: [src/execution/types.ts:607](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L607)

The actual event from the sub-agent

***

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/execution/types.ts:579](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L579)

The parent tool call ID that spawned this sub-agent

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`parentToolCallId`](subagenteventbase.md#parenttoolcallid)

***

### subagentId

> **subagentId**: `string`

Defined in: [src/execution/types.ts:575](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L575)

Unique ID of the sub-agent instance

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`subagentId`](subagenteventbase.md#subagentid)

***

### subagentType

> **subagentType**: `string`

Defined in: [src/execution/types.ts:577](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L577)

Type/name of the sub-agent (e.g., 'explorer', 'planner')

#### Inherited from

[`SubagentEventBase`](subagenteventbase.md).[`subagentType`](subagenteventbase.md#subagenttype)

***

### type

> **type**: `"subagent_event"`

Defined in: [src/execution/types.ts:605](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L605)

Event type discriminator
