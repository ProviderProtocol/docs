---
title: "Class: Document"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Document

# Class: Document

Defined in: [src/core/media/document.ts:35](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L35)

Represents a document that can be used in UPP messages.

Documents can be created from various sources (files, URLs, text, base64) and
converted to content blocks for provider APIs. The class provides a unified
interface regardless of the underlying source type.

## Example

```typescript
// Load PDF from file
const pdfDoc = await Document.fromPath('./report.pdf');

// Reference PDF by URL
const urlDoc = Document.fromUrl('https://example.com/document.pdf');

// From plain text
const textDoc = Document.fromText('Document content here...');

// Use in a message
const message = new UserMessage([document.toBlock()]);
```

## Properties

### mimeType

> `readonly` **mimeType**: `string`

Defined in: [src/core/media/document.ts:39](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L39)

MIME type of the document ('application/pdf' or 'text/plain')

***

### source

> `readonly` **source**: [`DocumentSource`](../type-aliases/documentsource.md)

Defined in: [src/core/media/document.ts:37](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L37)

The underlying document source (base64, url, or text)

***

### title?

> `readonly` `optional` **title**: `string`

Defined in: [src/core/media/document.ts:41](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L41)

Optional document title (used for citations)

## Accessors

### hasData

#### Get Signature

> **get** **hasData**(): `boolean`

Defined in: [src/core/media/document.ts:58](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L58)

Whether this document has data loaded in memory.

Returns `false` for URL-sourced documents that reference external resources.

##### Returns

`boolean`

***

### isPdf

#### Get Signature

> **get** **isPdf**(): `boolean`

Defined in: [src/core/media/document.ts:65](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L65)

Whether this document is a PDF.

##### Returns

`boolean`

***

### isText

#### Get Signature

> **get** **isText**(): `boolean`

Defined in: [src/core/media/document.ts:72](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L72)

Whether this document is plain text.

##### Returns

`boolean`

## Methods

### toBase64()

> **toBase64**(): `string`

Defined in: [src/core/media/document.ts:82](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L82)

Converts the document to a base64-encoded string.

#### Returns

`string`

The document data as a base64 string

#### Throws

When the source is a URL or plain text

***

### toBlock()

> **toBlock**(): [`DocumentBlock`](../interfaces/documentblock.md)

Defined in: [src/core/media/document.ts:123](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L123)

Converts this Document to a DocumentBlock for use in UPP messages.

#### Returns

[`DocumentBlock`](../interfaces/documentblock.md)

A DocumentBlock that can be included in message content arrays

***

### toText()

> **toText**(): `string`

Defined in: [src/core/media/document.ts:96](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L96)

Gets the plain text content for text documents.

#### Returns

`string`

The document text content

#### Throws

When the source is not plain text

***

### toUrl()

> **toUrl**(): `string`

Defined in: [src/core/media/document.ts:110](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L110)

Gets the URL for URL-sourced documents.

#### Returns

`string`

The document URL

#### Throws

When the source is not a URL

***

### fromBase64()

> `static` **fromBase64**(`base64`, `mimeType`, `title?`): `Document`

Defined in: [src/core/media/document.ts:225](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L225)

Creates a Document from base64-encoded data.

#### Parameters

##### base64

`string`

The base64-encoded document data

##### mimeType

`string`

The MIME type ('application/pdf' or 'text/plain')

##### title?

`string`

Optional document title

#### Returns

`Document`

A Document containing the base64 data

#### Example

```typescript
const doc = Document.fromBase64(pdfBase64, 'application/pdf', 'Contract');
```

***

### fromBlock()

> `static` **fromBlock**(`block`): `Document`

Defined in: [src/core/media/document.ts:262](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L262)

Creates a Document from an existing DocumentBlock.

Useful for converting content blocks received from providers back
into Document instances for further processing.

#### Parameters

##### block

[`DocumentBlock`](../interfaces/documentblock.md)

A DocumentBlock from message content

#### Returns

`Document`

A Document with the block's source and metadata

***

### fromPath()

> `static` **fromPath**(`path`, `title?`): `Promise`\<`Document`\>

Defined in: [src/core/media/document.ts:148](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L148)

Creates a Document by reading a file from disk.

The file is read into memory and base64-encoded. MIME type is automatically
detected from the file extension.

#### Parameters

##### path

`string`

Path to the document file

##### title?

`string`

Optional document title

#### Returns

`Promise`\<`Document`\>

Promise resolving to a Document with the file contents

#### Example

```typescript
const doc = await Document.fromPath('./reports/annual.pdf');
const docWithTitle = await Document.fromPath('./report.pdf', 'Annual Report 2024');
```

***

### fromText()

> `static` **fromText**(`text`, `title?`): `Document`

Defined in: [src/core/media/document.ts:245](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L245)

Creates a Document from plain text content.

#### Parameters

##### text

`string`

The document text content

##### title?

`string`

Optional document title

#### Returns

`Document`

A Document containing the text

#### Example

```typescript
const doc = Document.fromText('This is the document content.', 'Notes');
```

***

### fromUrl()

> `static` **fromUrl**(`url`, `title?`): `Document`

Defined in: [src/core/media/document.ts:192](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/core/media/document.ts#L192)

Creates a Document from a URL reference.

The URL is stored as a reference and not fetched. Providers will handle
URL fetching if needed. Only PDF URLs are supported.
URLs must use the http or https protocol.

#### Parameters

##### url

`string`

URL pointing to the PDF document

##### title?

`string`

Optional document title

#### Returns

`Document`

A Document referencing the URL

#### Example

```typescript
const doc = Document.fromUrl('https://example.com/report.pdf');
```
