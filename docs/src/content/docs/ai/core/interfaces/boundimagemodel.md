---
title: "Interface: BoundImageModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundImageModel

# Interface: BoundImageModel\<TParams\>

Defined in: [src/types/image.ts:295](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L295)

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

Defined in: [src/types/image.ts:303](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L303)

Model capabilities

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/image.ts:297](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L297)

The model identifier

***

### provider

> `readonly` **provider**: [`ImageProvider`](../type-aliases/imageprovider.md)\<`TParams`\>

Defined in: [src/types/image.ts:300](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L300)

Reference to the parent provider

## Methods

### edit()?

> `optional` **edit**(`request`): `Promise`\<[`ImageResponse`](imageresponse.md)\>

Defined in: [src/types/image.ts:327](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L327)

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

Defined in: [src/types/image.ts:311](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L311)

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

Defined in: [src/types/image.ts:319](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/image.ts#L319)

Stream image generation (optional).

#### Parameters

##### request

[`ImageRequest`](imagerequest.md)\<`TParams`\>

The generation request

#### Returns

[`ImageProviderStreamResult`](imageproviderstreamresult.md)

Stream result with events and final response
