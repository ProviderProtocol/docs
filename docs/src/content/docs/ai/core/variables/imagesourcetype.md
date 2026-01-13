---
title: "Variable: ImageSourceType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageSourceType

# Variable: ImageSourceType

> `const` **ImageSourceType**: `object`

Defined in: [src/types/content.ts:63](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L63)

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
