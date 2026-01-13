---
title: "Type Alias: ImageSource"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageSource

# Type Alias: ImageSource

> **ImageSource** = \{ `data`: `string`; `type`: `"base64"`; \} \| \{ `type`: `"url"`; `url`: `string`; \} \| \{ `data`: `Uint8Array`; `type`: `"bytes"`; \}

Defined in: [src/types/content.ts:105](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/content.ts#L105)

Image source variants for ImageBlock.

Images can be provided as base64-encoded strings, URLs, or raw bytes.

## Example

```typescript
// Base64 encoded image
const base64Source: ImageSource = {
  type: 'base64',
  data: 'iVBORw0KGgo...'
};

// URL reference
const urlSource: ImageSource = {
  type: 'url',
  url: 'https://example.com/image.png'
};

// Raw bytes
const bytesSource: ImageSource = {
  type: 'bytes',
  data: new Uint8Array([...])
};
```
