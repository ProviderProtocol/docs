---
title: "Function: imageGenerationTool()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / imageGenerationTool

# Function: imageGenerationTool()

> **imageGenerationTool**(`options?`): [`OpenAIImageGenerationTool`](../interfaces/openaiimagegenerationtool.md)

Defined in: [src/providers/openai/types.ts:1404](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/providers/openai/types.ts#L1404)

Creates an image generation tool configuration for the Responses API.

The image generation tool allows the model to generate images based on prompts.

## Parameters

### options?

Optional image generation settings

#### background?

`"auto"` \| `"transparent"` \| `"opaque"`

#### model?

`string`

#### output_format?

`"jpeg"` \| `"png"` \| `"webp"`

#### quality?

`"auto"` \| `"high"` \| `"medium"` \| `"low"`

#### size?

`"auto"` \| `"1024x1024"` \| `"1024x1536"` \| `"1536x1024"`

## Returns

[`OpenAIImageGenerationTool`](../interfaces/openaiimagegenerationtool.md)

An image generation tool configuration object

## Example

```typescript
// Default configuration
const imageGen = imageGenerationTool();

// With custom settings
const customImageGen = imageGenerationTool({
  quality: 'high',
  size: '1024x1024',
  background: 'transparent'
});
```
