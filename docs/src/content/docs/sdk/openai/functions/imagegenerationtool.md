---
title: "Function: imageGenerationTool()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / imageGenerationTool

# Function: imageGenerationTool()

> **imageGenerationTool**(`options?`): [`OpenAIImageGenerationTool`](../interfaces/OpenAIImageGenerationTool.md)

Defined in: [src/providers/openai/types.ts:1404](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1404)

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

[`OpenAIImageGenerationTool`](../interfaces/OpenAIImageGenerationTool.md)

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
