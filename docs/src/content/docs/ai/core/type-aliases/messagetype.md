---
title: "Type Alias: MessageType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageType

# Type Alias: MessageType

> **MessageType** = *typeof* [`MessageRole`](../variables/messagerole.md)\[keyof *typeof* [`MessageRole`](../variables/messagerole.md)\]

Defined in: [src/types/messages.ts:66](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L66)

Message type discriminator union.

This type is derived from [MessageRole](../variables/messagerole.md) constants. The name `MessageType`
is kept for backward compatibility; `MessageRole` works as both the const
object and this type.
