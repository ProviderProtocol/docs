---
title: "Interface: OpenAIConversation"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / OpenAIConversation

# Interface: OpenAIConversation

Defined in: [src/providers/openai/types.ts:254](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L254)

Reference to an existing conversation for the Responses API.

Items from this conversation are prepended to the input items,
enabling multi-turn conversations without resending full history.
Cannot be used together with `previous_response_id`.

## Properties

### id

> **id**: `string`

Defined in: [src/providers/openai/types.ts:256](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L256)

Conversation ID
