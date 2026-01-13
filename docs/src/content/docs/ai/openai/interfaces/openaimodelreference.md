---
title: "Interface: OpenAIModelReference"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIModelReference

# Interface: OpenAIModelReference

Defined in: [src/providers/openai/types.ts:421](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L421)

Model reference with OpenAI-specific options.
Used internally to track the selected model and API mode.

## Properties

### modelId

> **modelId**: `string`

Defined in: [src/providers/openai/types.ts:423](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L423)

The OpenAI model identifier (e.g., 'gpt-4o', 'o1-preview')

***

### options?

> `optional` **options**: [`OpenAIModelOptions`](openaimodeloptions.md)

Defined in: [src/providers/openai/types.ts:425](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L425)

Optional model-specific options
