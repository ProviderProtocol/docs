---
title: "Interface: ImageInstance"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageInstance

# Interface: ImageInstance\<TParams\>

Defined in: [src/types/image.ts:180](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L180)

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

Defined in: [src/types/image.ts:215](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L215)

Model capabilities

***

### model

> `readonly` **model**: [`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

Defined in: [src/types/image.ts:209](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L209)

The bound image model

***

### params

> `readonly` **params**: `TParams` \| `undefined`

Defined in: [src/types/image.ts:212](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L212)

Current parameters

## Methods

### edit()?

> `optional` **edit**(`input`): `Promise`\<[`ImageResult`](imageresult.md)\>

Defined in: [src/types/image.ts:206](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L206)

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

Defined in: [src/types/image.ts:188](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L188)

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

Defined in: [src/types/image.ts:197](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L197)

Generate with streaming progress (if supported).
Only available when capabilities.streaming is true.

#### Parameters

##### input

[`ImageInput`](../type-aliases/imageinput.md)

The prompt string or object with prompt

#### Returns

[`ImageStreamResult`](imagestreamresult.md)

ImageStreamResult with events and final result
