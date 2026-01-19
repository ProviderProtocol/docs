---
title: "Type Alias: DocumentSource"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / DocumentSource

# Type Alias: DocumentSource

> **DocumentSource** = \{ `data`: `string`; `type`: `"base64"`; \} \| \{ `type`: `"url"`; `url`: `string`; \} \| \{ `data`: `string`; `type`: `"text"`; \}

Defined in: [src/types/content.ts:170](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L170)

Document source variants for DocumentBlock.

Documents can be provided as base64-encoded data (PDFs), URLs (PDFs), or plain text.

## Example

```typescript
// Base64 encoded PDF
const base64Source: DocumentSource = {
  type: 'base64',
  data: 'JVBERi0xLjQK...'
};

// URL reference to PDF
const urlSource: DocumentSource = {
  type: 'url',
  url: 'https://example.com/document.pdf'
};

// Plain text document
const textSource: DocumentSource = {
  type: 'text',
  data: 'This is the document content...'
};
```
