---
title: "Function: isToolResultMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isToolResultMessage

# Function: isToolResultMessage()

> **isToolResultMessage**(`msg`): `msg is ToolResultMessage`

Defined in: [src/types/messages.ts:398](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L398)

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
