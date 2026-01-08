---
title: "Type Alias: SubagentEvent"
---

[**@providerprotocol/agents**](../../index.md)

***

[@providerprotocol/agents](./index.md) / [index](../index.md) / SubagentEvent

# Type Alias: SubagentEvent

> **SubagentEvent** = [`SubagentStartEvent`](../interfaces/subagentstartevent.md) \| [`SubagentInnerEvent`](../interfaces/subagentinnerevent.md) \| [`SubagentEndEvent`](../interfaces/subagentendevent.md)

Defined in: [src/execution/types.ts:662](https://github.com/ProviderProtocol/agents/blob/59ff88d2bfea022f5ff17d40d6de9dca12d5662e/src/execution/types.ts#L662)

Union type for all sub-agent events.

Use this type when handling sub-agent events and switch on the
`type` field to narrow to the specific event type.

## See

UAP-1.0 Spec Section 8.7

## Example

```typescript
function handleSubagentEvent(event: SubagentEvent) {
  switch (event.type) {
    case 'subagent_start':
      console.log(`Sub-agent ${event.subagentId} started`);
      break;
    case 'subagent_event':
      console.log(`Inner event:`, event.innerEvent);
      break;
    case 'subagent_end':
      console.log(`Sub-agent ${event.subagentId} ended: ${event.success}`);
      break;
  }
}
```
