---
title: "Interface: ImageInstance"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageInstance

# Interface: ImageInstance\<TParams\>

Defined in: [src/types/image.ts:182](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L182)

Image instance returned by the image() function.

## Example

```typescript
const dalle = image({ model: openai('dall-e-3') });

// Simple generation
const result = await dalle.generate('A sunset over mountains');

// Streaming (if supported)
if (dalle.capabilities.streaming && dalle.stream) {
  const stream = dalle.stream('A cyberpunk cityscape');
  for await (const event of stream) {
    // Handle preview/complete events
  }
}
```

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### capabilities

> `readonly` **capabilities**: [`ImageCapabilities`](imagecapabilities.md)

Defined in: [src/types/image.ts:217](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L217)

Model capabilities

***

### model

> `readonly` **model**: [`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

Defined in: [src/types/image.ts:211](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L211)

The bound image model

***

### params

> `readonly` **params**: `TParams` \| `undefined`

Defined in: [src/types/image.ts:214](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L214)

Current parameters

## Methods

### edit()?

> `optional` **edit**(`input`): `Promise`\<[`ImageResult`](imageresult.md)\>

Defined in: [src/types/image.ts:208](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L208)

Edit an existing image (if supported).
Only available when capabilities.edit is true.

#### Parameters

##### input

[`ImageEditInput`](imageeditinput.md)

Edit input with image, optional mask, and prompt

#### Returns

`Promise`\<[`ImageResult`](imageresult.md)\>

Promise resolving to the edited images

***

### generate()

> **generate**(`input`, `options?`): `Promise`\<[`ImageResult`](imageresult.md)\>

Defined in: [src/types/image.ts:190](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L190)

Generate images from a text prompt.

#### Parameters

##### input

[`ImageInput`](../type-aliases/imageinput.md)

The prompt string or object with prompt

##### options?

[`ImageGenerateOptions`](imagegenerateoptions.md)

Optional generation options

#### Returns

`Promise`\<[`ImageResult`](imageresult.md)\>

Promise resolving to the generated images

***

### stream()?

> `optional` **stream**(`input`): [`ImageStreamResult`](imagestreamresult.md)

Defined in: [src/types/image.ts:199](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L199)

Generate with streaming progress (if supported).
Only available when capabilities.streaming is true.

#### Parameters

##### input

[`ImageInput`](../type-aliases/imageinput.md)

The prompt string or object with prompt

#### Returns

[`ImageStreamResult`](imagestreamresult.md)

ImageStreamResult with events and final result
