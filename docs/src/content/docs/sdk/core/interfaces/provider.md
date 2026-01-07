---
title: "Interface: Provider()<TOptions>"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / Provider

# Interface: Provider()\<TOptions\>

Defined in: [src/types/provider.ts:319](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L319)

Provider factory function with metadata and modality handlers.

The Provider interface represents a callable function that creates
model references, along with metadata and modality-specific handlers.

## Example

```typescript
// Using a provider
const model = openai('gpt-4', { temperature: 0.7 });

// Accessing provider metadata
console.log(openai.name); // 'openai'
console.log(openai.version); // '1.0.0'

// Accessing modality handlers
const llmHandler = openai.modalities.llm;
```

## Extended by

- [`XAIProvider`](../../../xai/interfaces/XAIProvider.md)

## Type Parameters

### TOptions

`TOptions` = `unknown`

Provider-specific options passed to the factory

> **Provider**(`modelId`, `options?`): [`ModelReference`](ModelReference.md)\<`TOptions`\>

Defined in: [src/types/provider.ts:327](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L327)

Creates a model reference with optional provider-specific options.

## Parameters

### modelId

`string`

The model identifier

### options?

`TOptions`

Provider-specific options

## Returns

[`ModelReference`](ModelReference.md)\<`TOptions`\>

A model reference for use with llm() or other functions

## Properties

### modalities

> `readonly` **modalities**: `object`

Defined in: [src/types/provider.ts:336](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L336)

Supported modalities and their handlers

#### embedding?

> `optional` **embedding**: [`EmbeddingHandler`](EmbeddingHandler.md)\<`any`\>

#### image?

> `optional` **image**: [`ImageHandler`](ImageHandler.md)\<`any`\>

#### llm?

> `optional` **llm**: `LLMHandler`\<`any`\>

***

### name

> `readonly` **name**: `string`

Defined in: [src/types/provider.ts:330](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L330)

Provider name (e.g., 'openai', 'anthropic')

***

### version

> `readonly` **version**: `string`

Defined in: [src/types/provider.ts:333](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/provider.ts#L333)

Provider version string
