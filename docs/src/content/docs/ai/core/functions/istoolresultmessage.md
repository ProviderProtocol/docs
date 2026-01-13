---
title: "Function: isToolResultMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isToolResultMessage

# Function: isToolResultMessage()

> **isToolResultMessage**(`msg`): `msg is ToolResultMessage`

Defined in: [src/types/messages.ts:390](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/messages.ts#L390)

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
