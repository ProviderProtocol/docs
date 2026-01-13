---
title: "Function: isUserMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isUserMessage

# Function: isUserMessage()

> **isUserMessage**(`msg`): `msg is UserMessage`

Defined in: [src/types/messages.ts:351](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L351)

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
