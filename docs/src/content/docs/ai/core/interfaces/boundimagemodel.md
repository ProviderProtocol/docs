---
title: "Interface: BoundImageModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundImageModel

# Interface: BoundImageModel\<TParams\>

Defined in: [src/types/image.ts:304](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L304)

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

Defined in: [src/types/image.ts:312](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L312)

Model capabilities

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/image.ts:306](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L306)

The model identifier

***

### provider

> `readonly` **provider**: [`ImageProvider`](../type-aliases/imageprovider.md)\<`TParams`\>

Defined in: [src/types/image.ts:309](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L309)

Reference to the parent provider

## Methods

### edit()?

> `optional` **edit**(`request`): `Promise`\<[`ImageResponse`](imageresponse.md)\>

Defined in: [src/types/image.ts:336](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L336)

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

Defined in: [src/types/image.ts:320](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L320)

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

Defined in: [src/types/image.ts:328](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L328)

Stream image generation (optional).

#### Parameters

##### request

[`ImageRequest`](imagerequest.md)\<`TParams`\>

The generation request

#### Returns

[`ImageProviderStreamResult`](imageproviderstreamresult.md)

Stream result with events and final response
