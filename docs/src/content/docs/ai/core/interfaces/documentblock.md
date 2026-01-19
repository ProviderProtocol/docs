---
title: "Interface: DocumentBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / DocumentBlock

# Interface: DocumentBlock

Defined in: [src/types/content.ts:275](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L275)

Document content block.

Contains a document (PDF or plain text) with its source and metadata.
Supports PDF documents via base64 encoding or URL, and plain text content.

## Example

```typescript
// PDF document from base64
const pdfBlock: DocumentBlock = {
  type: 'document',
  source: { type: 'base64', data: 'JVBERi0xLjQK...' },
  mimeType: 'application/pdf',
  title: 'Annual Report'
};

// Plain text document
const textDoc: DocumentBlock = {
  type: 'document',
  source: { type: 'text', data: 'Document contents here...' },
  mimeType: 'text/plain'
};
```

## Properties

### mimeType

> **mimeType**: `string`

Defined in: [src/types/content.ts:283](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L283)

MIME type of the document ('application/pdf' or 'text/plain')

***

### source

> **source**: [`DocumentSource`](../type-aliases/documentsource.md)

Defined in: [src/types/content.ts:280](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L280)

The document data source

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/content.ts:286](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L286)

Optional document title (used for citations)

***

### type

> **type**: `"document"`

Defined in: [src/types/content.ts:277](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L277)

Discriminator for document blocks
