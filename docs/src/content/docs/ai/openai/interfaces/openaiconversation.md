---
title: "Interface: OpenAIConversation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIConversation

# Interface: OpenAIConversation

Defined in: [src/providers/openai/types.ts:254](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L254)

Reference to an existing conversation for the Responses API.

Items from this conversation are prepended to the input items,
enabling multi-turn conversations without resending full history.
Cannot be used together with `previous_response_id`.

## Properties

### id

> **id**: `string`

Defined in: [src/providers/openai/types.ts:256](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L256)

Conversation ID
