---
title: "Interface: ImageOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageOptions

# Interface: ImageOptions\<TParams\>

Defined in: [src/types/image.ts:44](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/image.ts#L44)

Options for creating an image instance with the image() function.

## Example

```typescript
const options: ImageOptions<OpenAIImageParams> = {
  model: openai('dall-e-3'),
  config: { apiKey: process.env.OPENAI_API_KEY },
  params: { size: '1024x1024', quality: 'hd' }
};
```

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### config?

> `optional` **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/image.ts:49](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/image.ts#L49)

Provider infrastructure configuration

***

### model

> **model**: [`ImageModelInput`](imagemodelinput.md)

Defined in: [src/types/image.ts:46](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/image.ts#L46)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:52](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/image.ts#L52)

Provider-specific parameters (passed through unchanged)
