---
title: "Interface: SubagentEventBase"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / SubagentEventBase

# Interface: SubagentEventBase

Defined in: [src/execution/types.ts:573](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L573)

Base fields present in all sub-agent events.

Provides the common identification and relationship fields
that all sub-agent event types share.

## Extended by

- [`SubagentStartEvent`](SubagentStartEvent.md)
- [`SubagentInnerEvent`](SubagentInnerEvent.md)
- [`SubagentEndEvent`](SubagentEndEvent.md)

## Properties

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/execution/types.ts:579](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L579)

The parent tool call ID that spawned this sub-agent

***

### subagentId

> **subagentId**: `string`

Defined in: [src/execution/types.ts:575](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L575)

Unique ID of the sub-agent instance

***

### subagentType

> **subagentType**: `string`

Defined in: [src/execution/types.ts:577](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L577)

Type/name of the sub-agent (e.g., 'explorer', 'planner')
