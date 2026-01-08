---
title: "Type Alias: OnSubagentEvent()"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / OnSubagentEvent

# Type Alias: OnSubagentEvent()

> **OnSubagentEvent** = (`event`) => `void`

Defined in: [src/execution/types.ts:672](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L672)

Callback type for receiving sub-agent events.

Tools that spawn sub-agents should accept this callback to propagate
sub-agent lifecycle events to the parent execution context.

## Parameters

### event

[`SubagentEvent`](SubagentEvent.md)

The sub-agent event to handle

## Returns

`void`
