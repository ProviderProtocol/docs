---
title: "Interface: Provider()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Provider

# Interface: Provider()\<TOptions\>

Defined in: [src/types/provider.ts:402](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L402)

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

- [`XAIProvider`](../../../xai/interfaces/xaiprovider.md)

## Type Parameters

### TOptions

`TOptions` = `unknown`

Provider-specific options passed to the factory

> **Provider**(`modelId`, `options?`): [`ModelReference`](modelreference.md)\<`TOptions`\>

Defined in: [src/types/provider.ts:410](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L410)

Creates a model reference with optional provider-specific options.

## Parameters

### modelId

`string`

The model identifier

### options?

`TOptions`

Provider-specific options

## Returns

[`ModelReference`](modelreference.md)\<`TOptions`\>

A model reference for use with llm() or other functions

## Properties

### modalities

> `readonly` **modalities**: `object`

Defined in: [src/types/provider.ts:419](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L419)

Supported modalities and their handlers

#### embedding?

> `optional` **embedding**: [`EmbeddingHandler`](embeddinghandler.md)\<`any`\>

#### image?

> `optional` **image**: [`ImageHandler`](imagehandler.md)\<`any`\>

#### llm?

> `optional` **llm**: `LLMHandler`\<`any`\>

***

### name

> `readonly` **name**: `string`

Defined in: [src/types/provider.ts:413](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L413)

Provider name (e.g., 'openai', 'anthropic')

***

### version

> `readonly` **version**: `string`

Defined in: [src/types/provider.ts:416](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/provider.ts#L416)

Provider version string
