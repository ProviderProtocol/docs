---
title: "Variable: ImageSourceType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageSourceType

# Variable: ImageSourceType

> `const` **ImageSourceType**: `object`

Defined in: [src/types/content.ts:63](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/content.ts#L63)

Image source type constants.

## Type Declaration

### Base64

> `readonly` **Base64**: `"base64"` = `'base64'`

Base64-encoded image data

### Bytes

> `readonly` **Bytes**: `"bytes"` = `'bytes'`

Raw bytes image data

### Url

> `readonly` **Url**: `"url"` = `'url'`

URL reference to image

## Example

```typescript
import { ImageSourceType } from 'upp';

if (source.type === ImageSourceType.Base64) {
  // Handle base64 encoded image
} else if (source.type === ImageSourceType.Url) {
  // Handle URL reference
}
```
