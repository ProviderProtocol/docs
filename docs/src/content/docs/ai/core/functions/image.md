---
title: "Function: image()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / image

# Function: image()

> **image**\<`TParams`\>(`options`): [`ImageInstance`](../interfaces/imageinstance.md)\<`TParams`\>

Defined in: [src/core/image.ts:53](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/image.ts#L53)

Creates an image generation instance configured with the specified options.

This is the primary factory function for creating image generation instances.
It validates provider capabilities, binds the model, and returns an instance
with `generate`, `stream`, and `edit` methods.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type for model configuration

## Parameters

### options

[`ImageOptions`](../interfaces/imageoptions.md)\<`TParams`\>

Configuration options for the image instance

## Returns

[`ImageInstance`](../interfaces/imageinstance.md)\<`TParams`\>

A configured image instance ready for generation

## Throws

When the provider does not support the image modality

## Example

```typescript
import { image } from 'upp';
import { openai } from 'upp/providers/openai';

const dalle = image({
  model: openai('dall-e-3'),
  params: { size: '1024x1024', quality: 'hd' }
});

const result = await dalle.generate('A sunset over mountains');
console.log(result.images.length);
```
