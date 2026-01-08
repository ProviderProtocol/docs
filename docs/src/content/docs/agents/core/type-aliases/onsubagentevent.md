---
title: "Type Alias: OnSubagentEvent()"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / OnSubagentEvent

# Type Alias: OnSubagentEvent()

> **OnSubagentEvent** = (`event`) => `void`

Defined in: [src/execution/types.ts:672](https://github.com/ProviderProtocol/agents/blob/6ccd56db587110551b2124128a4f22b2f896aa27/src/execution/types.ts#L672)

Callback type for receiving sub-agent events.

Tools that spawn sub-agents should accept this callback to propagate
sub-agent lifecycle events to the parent execution context.

## Parameters

### event

[`SubagentEvent`](subagentevent.md)

The sub-agent event to handle

## Returns

`void`
