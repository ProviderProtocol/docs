---
title: "Function: isUserMessage()"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / isUserMessage

# Function: isUserMessage()

> **isUserMessage**(`msg`): `msg is UserMessage`

Defined in: [src/types/messages.ts:299](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/messages.ts#L299)

Type guard for UserMessage.

## Parameters

### msg

[`Message`](../classes/Message.md)

The message to check

## Returns

`msg is UserMessage`

True if the message is a UserMessage

## Example

```typescript
if (isUserMessage(msg)) {
  console.log('User said:', msg.text);
}
```
