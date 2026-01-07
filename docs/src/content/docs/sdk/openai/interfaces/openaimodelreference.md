---
title: "Interface: OpenAIModelReference"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / OpenAIModelReference

# Interface: OpenAIModelReference

Defined in: [src/providers/openai/types.ts:421](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L421)

Model reference with OpenAI-specific options.
Used internally to track the selected model and API mode.

## Properties

### modelId

> **modelId**: `string`

Defined in: [src/providers/openai/types.ts:423](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L423)

The OpenAI model identifier (e.g., 'gpt-4o', 'o1-preview')

***

### options?

> `optional` **options**: [`OpenAIModelOptions`](OpenAIModelOptions.md)

Defined in: [src/providers/openai/types.ts:425](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L425)

Optional model-specific options
