---
title: "Function: isToolResultMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isToolResultMessage

# Function: isToolResultMessage()

> **isToolResultMessage**(`msg`): `msg is ToolResultMessage`

Defined in: [src/types/messages.ts:349](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/messages.ts#L349)

Type guard for ToolResultMessage.

## Parameters

### msg

[`Message`](../classes/message.md)

The message to check

## Returns

`msg is ToolResultMessage`

True if the message is a ToolResultMessage

## Example

```typescript
if (isToolResultMessage(msg)) {
  for (const result of msg.results) {
    console.log(`Tool ${result.toolCallId}:`, result.result);
  }
}
```
