---
title: "Type Alias: MessageType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageType

# Type Alias: MessageType

> **MessageType** = *typeof* [`MessageRole`](../variables/messagerole.md)\[keyof *typeof* [`MessageRole`](../variables/messagerole.md)\]

Defined in: [src/types/messages.ts:67](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/messages.ts#L67)

Message type discriminator union.

This type is derived from [MessageRole](../variables/messagerole.md) constants. The name `MessageType`
is kept for backward compatibility; `MessageRole` works as both the const
object and this type.
