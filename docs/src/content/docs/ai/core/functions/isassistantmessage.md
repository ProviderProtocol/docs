---
title: "Function: isAssistantMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isAssistantMessage

# Function: isAssistantMessage()

> **isAssistantMessage**(`msg`): `msg is AssistantMessage`

Defined in: [src/types/messages.ts:330](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/messages.ts#L330)

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
