---
title: "Function: isAssistantMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isAssistantMessage

# Function: isAssistantMessage()

> **isAssistantMessage**(`msg`): `msg is AssistantMessage`

Defined in: [src/types/messages.ts:379](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/messages.ts#L379)

Type guard for AssistantMessage.

## Parameters

### msg

[`Message`](../classes/message.md)

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
