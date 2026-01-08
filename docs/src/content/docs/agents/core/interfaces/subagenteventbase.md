---
title: "Interface: SubagentEventBase"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / SubagentEventBase

# Interface: SubagentEventBase

Defined in: [src/execution/types.ts:573](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L573)

Base fields present in all sub-agent events.

Provides the common identification and relationship fields
that all sub-agent event types share.

## Extended by

- [`SubagentStartEvent`](subagentstartevent.md)
- [`SubagentInnerEvent`](subagentinnerevent.md)
- [`SubagentEndEvent`](subagentendevent.md)

## Properties

### parentToolCallId

> **parentToolCallId**: `string`

Defined in: [src/execution/types.ts:579](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L579)

The parent tool call ID that spawned this sub-agent

***

### subagentId

> **subagentId**: `string`

Defined in: [src/execution/types.ts:575](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L575)

Unique ID of the sub-agent instance

***

### subagentType

> **subagentType**: `string`

Defined in: [src/execution/types.ts:577](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L577)

Type/name of the sub-agent (e.g., 'explorer', 'planner')
