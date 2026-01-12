---
title: "Interface: ImageOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageOptions

# Interface: ImageOptions\<TParams\>

Defined in: [src/types/image.ts:42](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L42)

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

Defined in: [src/types/image.ts:47](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L47)

Provider infrastructure configuration

***

### model

> **model**: [`ImageModelInput`](imagemodelinput.md)

Defined in: [src/types/image.ts:44](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L44)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:50](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L50)

Provider-specific parameters (passed through unchanged)
