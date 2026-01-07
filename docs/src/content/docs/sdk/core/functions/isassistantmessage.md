---
title: "Function: isAssistantMessage()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / isAssistantMessage

# Function: isAssistantMessage()

> **isAssistantMessage**(`msg`): `msg is AssistantMessage`

Defined in: [src/types/messages.ts:319](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L319)

Type guard for AssistantMessage.

## Parameters

### msg

[`Message`](../classes/Message.md)

The message to check

## Returns

`msg is AssistantMessage`

True if the message is an AssistantMessage

## Example

```typescript
if (isAssistantMessage(msg)) {
  console.log('Assistant said:', msg.text);
  if (msg.hasToolCalls) {
    console.log('Tool calls:', msg.toolCalls);
  }
}
```
