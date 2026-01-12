---
title: "Interface: BoundImageModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundImageModel

# Interface: BoundImageModel\<TParams\>

Defined in: [src/types/image.ts:293](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L293)

Bound image model - full definition.

Represents an image model bound to a specific provider and model ID,
ready to execute generation requests.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### capabilities

> `readonly` **capabilities**: [`ImageCapabilities`](imagecapabilities.md)

Defined in: [src/types/image.ts:301](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L301)

Model capabilities

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/image.ts:295](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L295)

The model identifier

***

### provider

> `readonly` **provider**: [`ImageProvider`](../type-aliases/imageprovider.md)\<`TParams`\>

Defined in: [src/types/image.ts:298](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L298)

Reference to the parent provider

## Methods

### edit()?

> `optional` **edit**(`request`): `Promise`\<[`ImageResponse`](imageresponse.md)\>

Defined in: [src/types/image.ts:325](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L325)

Edit an image (optional).

#### Parameters

##### request

[`ImageEditRequest`](imageeditrequest.md)\<`TParams`\>

The edit request

#### Returns

`Promise`\<[`ImageResponse`](imageresponse.md)\>

Promise resolving to the response

***

### generate()

> **generate**(`request`): `Promise`\<[`ImageResponse`](imageresponse.md)\>

Defined in: [src/types/image.ts:309](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L309)

Generate images from a prompt.

#### Parameters

##### request

[`ImageRequest`](imagerequest.md)\<`TParams`\>

The generation request

#### Returns

`Promise`\<[`ImageResponse`](imageresponse.md)\>

Promise resolving to the response

***

### stream()?

> `optional` **stream**(`request`): [`ImageProviderStreamResult`](imageproviderstreamresult.md)

Defined in: [src/types/image.ts:317](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L317)

Stream image generation (optional).

#### Parameters

##### request

[`ImageRequest`](imagerequest.md)\<`TParams`\>

The generation request

#### Returns

[`ImageProviderStreamResult`](imageproviderstreamresult.md)

Stream result with events and final response
