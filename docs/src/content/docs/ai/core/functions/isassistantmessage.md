---
title: "Function: isAssistantMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isAssistantMessage

# Function: isAssistantMessage()

> **isAssistantMessage**(`msg`): `msg is AssistantMessage`

Defined in: [src/types/messages.ts:319](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/messages.ts#L319)

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
