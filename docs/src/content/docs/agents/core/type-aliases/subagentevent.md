---
title: "Type Alias: SubagentEvent"
---

[**@providerprotocol/agents**](../../README.md)

***

[@providerprotocol/agents](../../modules.md) / [index](../README.md) / SubagentEvent

# Type Alias: SubagentEvent

> **SubagentEvent** = [`SubagentStartEvent`](../interfaces/SubagentStartEvent.md) \| [`SubagentInnerEvent`](../interfaces/SubagentInnerEvent.md) \| [`SubagentEndEvent`](../interfaces/SubagentEndEvent.md)

Defined in: [src/execution/types.ts:662](https://github.com/ProviderProtocol/agents/blob/6c552a1ce44c20ba911004f801fa7e4bc6c72033/src/execution/types.ts#L662)

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
