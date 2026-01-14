---
title: "Variable: ContentBlockType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ContentBlockType

# Variable: ContentBlockType

> `const` **ContentBlockType**: `object`

Defined in: [src/types/content.ts:27](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/content.ts#L27)

Content block type constants.

Use these constants instead of raw strings for type-safe content handling:

## Type Declaration

### Audio

> `readonly` **Audio**: `"audio"` = `'audio'`

Audio content

### Binary

> `readonly` **Binary**: `"binary"` = `'binary'`

Binary/arbitrary data content

### Document

> `readonly` **Document**: `"document"` = `'document'`

Document content (PDFs, text files)

### Image

> `readonly` **Image**: `"image"` = `'image'`

Image content

### Reasoning

> `readonly` **Reasoning**: `"reasoning"` = `'reasoning'`

Reasoning/thinking content from extended thinking models

### Text

> `readonly` **Text**: `"text"` = `'text'`

Text content

### Video

> `readonly` **Video**: `"video"` = `'video'`

Video content

## Example

```typescript
import { ContentBlockType } from 'upp';

if (block.type === ContentBlockType.Text) {
  console.log(block.text);
} else if (block.type === ContentBlockType.Image) {
  console.log(block.mimeType);
}
```
