---
title: "Function: isUserMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isUserMessage

# Function: isUserMessage()

> **isUserMessage**(`msg`): `msg is UserMessage`

Defined in: [src/types/messages.ts:359](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/messages.ts#L359)

Type guard for UserMessage.

## Parameters

### msg

[`Message`](../classes/message.md)

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
