---
title: "Variable: DocumentSourceType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / DocumentSourceType

# Variable: DocumentSourceType

> `const` **DocumentSourceType**: `object`

Defined in: [src/types/content.ts:128](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/content.ts#L128)

Document source type constants.

## Type Declaration

### Base64

> `readonly` **Base64**: `"base64"` = `'base64'`

Base64-encoded document data (for PDFs)

### Text

> `readonly` **Text**: `"text"` = `'text'`

Plain text document content

### Url

> `readonly` **Url**: `"url"` = `'url'`

URL reference to document (for PDFs)

## Example

```typescript
import { DocumentSourceType } from 'upp';

if (source.type === DocumentSourceType.Base64) {
  // Handle base64 encoded document (PDF)
} else if (source.type === DocumentSourceType.Url) {
  // Handle URL reference (PDF)
} else if (source.type === DocumentSourceType.Text) {
  // Handle plain text document
}
```
