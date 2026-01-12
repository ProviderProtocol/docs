---
title: "Class: Image"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Image

# Class: Image

Defined in: [src/core/media/Image.ts:35](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L35)

Represents an image that can be used in UPP messages.

Images can be created from various sources (files, URLs, bytes, base64) and
converted to different formats as needed by providers. The class provides
a unified interface regardless of the underlying source type.

## Example

```typescript
// Load from file
const fileImage = await Image.fromPath('./photo.jpg');

// Reference by URL
const urlImage = Image.fromUrl('https://example.com/image.png');

// From raw bytes
const bytesImage = Image.fromBytes(uint8Array, 'image/png');

// Use in a message
const message = new UserMessage([image.toBlock()]);
```

## Properties

### height?

> `readonly` `optional` **height**: `number`

Defined in: [src/core/media/Image.ts:43](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L43)

Image height in pixels, if known

***

### mimeType

> `readonly` **mimeType**: `string`

Defined in: [src/core/media/Image.ts:39](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L39)

MIME type of the image (e.g., 'image/jpeg', 'image/png')

***

### source

> `readonly` **source**: [`ImageSource`](../type-aliases/imagesource.md)

Defined in: [src/core/media/Image.ts:37](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L37)

The underlying image source (bytes, base64, or URL)

***

### width?

> `readonly` `optional` **width**: `number`

Defined in: [src/core/media/Image.ts:41](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L41)

Image width in pixels, if known

## Accessors

### hasData

#### Get Signature

> **get** **hasData**(): `boolean`

Defined in: [src/core/media/Image.ts:63](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L63)

Whether this image has data loaded in memory.

Returns `false` for URL-sourced images that reference external resources.
These must be fetched before their data can be accessed.

##### Returns

`boolean`

## Methods

### toBase64()

> **toBase64**(): `string`

Defined in: [src/core/media/Image.ts:73](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L73)

Converts the image to a base64-encoded string.

#### Returns

`string`

The image data as a base64 string

#### Throws

When the source is a URL (data must be fetched first)

***

### toBlock()

> **toBlock**(): [`ImageBlock`](../interfaces/imageblock.md)

Defined in: [src/core/media/Image.ts:142](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L142)

Converts this Image to an ImageBlock for use in UPP messages.

#### Returns

[`ImageBlock`](../interfaces/imageblock.md)

An ImageBlock that can be included in message content arrays

***

### toBytes()

> **toBytes**(): `Uint8Array`

Defined in: [src/core/media/Image.ts:106](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L106)

Gets the image data as raw bytes.

#### Returns

`Uint8Array`

The image data as a Uint8Array

#### Throws

When the source is a URL (data must be fetched first)

***

### toDataUrl()

> **toDataUrl**(): `string`

Defined in: [src/core/media/Image.ts:95](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L95)

Converts the image to a data URL suitable for embedding in HTML or CSS.

#### Returns

`string`

A data URL in the format `data:{mimeType};base64,{data}`

#### Throws

When the source is a URL (data must be fetched first)

***

### toUrl()

> **toUrl**(): `string`

Defined in: [src/core/media/Image.ts:129](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L129)

Gets the URL for URL-sourced images.

#### Returns

`string`

The image URL

#### Throws

When the source is not a URL

***

### fromBase64()

> `static` **fromBase64**(`base64`, `mimeType`): `Image`

Defined in: [src/core/media/Image.ts:227](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L227)

Creates an Image from a base64-encoded string.

#### Parameters

##### base64

`string`

The base64-encoded image data (without data URL prefix)

##### mimeType

`string`

The MIME type of the image

#### Returns

`Image`

An Image containing the base64 data

#### Example

```typescript
const image = Image.fromBase64(base64String, 'image/jpeg');
```

***

### fromBlock()

> `static` **fromBlock**(`block`): `Image`

Defined in: [src/core/media/Image.ts:240](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L240)

Creates an Image from an existing ImageBlock.

Useful for converting content blocks received from providers back
into Image instances for further processing.

#### Parameters

##### block

[`ImageBlock`](../interfaces/imageblock.md)

An ImageBlock from message content

#### Returns

`Image`

An Image with the block's source and metadata

***

### fromBytes()

> `static` **fromBytes**(`data`, `mimeType`): `Image`

Defined in: [src/core/media/Image.ts:211](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L211)

Creates an Image from raw byte data.

#### Parameters

##### data

`Uint8Array`

The image data as a Uint8Array

##### mimeType

`string`

The MIME type of the image

#### Returns

`Image`

An Image containing the byte data

#### Example

```typescript
const image = Image.fromBytes(pngData, 'image/png');
```

***

### fromPath()

> `static` **fromPath**(`path`): `Promise`\<`Image`\>

Defined in: [src/core/media/Image.ts:166](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L166)

Creates an Image by reading a file from disk.

The file is read into memory as bytes. MIME type is automatically
detected from the file extension.

#### Parameters

##### path

`string`

Path to the image file

#### Returns

`Promise`\<`Image`\>

Promise resolving to an Image with the file contents

#### Example

```typescript
const image = await Image.fromPath('./photos/vacation.jpg');
```

***

### fromUrl()

> `static` **fromUrl**(`url`, `mimeType?`): `Image`

Defined in: [src/core/media/Image.ts:194](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/core/media/Image.ts#L194)

Creates an Image from a URL reference.

The URL is stored as a reference and not fetched. Providers will handle
URL-to-data conversion if needed. MIME type is detected from the URL
path if not provided.

#### Parameters

##### url

`string`

URL pointing to the image

##### mimeType?

`string`

Optional MIME type override

#### Returns

`Image`

An Image referencing the URL

#### Example

```typescript
const image = Image.fromUrl('https://example.com/logo.png');
```
