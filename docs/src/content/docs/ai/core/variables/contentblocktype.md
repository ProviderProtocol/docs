---
title: "Variable: ContentBlockType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ContentBlockType

# Variable: ContentBlockType

> `const` **ContentBlockType**: `object`

Defined in: [src/types/content.ts:27](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/content.ts#L27)

Content block type constants.

Use these constants instead of raw strings for type-safe content handling:

## Type Declaration

### Audio

> `readonly` **Audio**: `"audio"` = `'audio'`

Audio content

### Binary

> `readonly` **Binary**: `"binary"` = `'binary'`

Binary/arbitrary data content

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
