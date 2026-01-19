---
title: "Interface: ImageOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageOptions

# Interface: ImageOptions\<TParams\>

Defined in: [src/types/image.ts:45](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L45)

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

Defined in: [src/types/image.ts:50](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L50)

Provider infrastructure configuration

***

### middleware?

> `optional` **middleware**: [`Middleware`](middleware.md)[]

Defined in: [src/types/image.ts:61](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L61)

Middleware for intercepting and transforming requests and responses.

Middleware are executed in array order for request/start hooks,
and reverse order for response/end hooks.

***

### model

> **model**: [`ImageModelInput`](imagemodelinput.md)

Defined in: [src/types/image.ts:47](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L47)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:53](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L53)

Provider-specific parameters (passed through unchanged)
