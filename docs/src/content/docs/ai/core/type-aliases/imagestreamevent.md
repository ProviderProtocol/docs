---
title: "Type Alias: ImageStreamEvent"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageStreamEvent

# Type Alias: ImageStreamEvent

> **ImageStreamEvent** = \{ `image`: [`Image`](../classes/image.md); `index`: `number`; `metadata?`: `Record`\<`string`, `unknown`\>; `type`: `"preview"`; \} \| \{ `image`: [`GeneratedImage`](../interfaces/generatedimage.md); `index`: `number`; `type`: `"complete"`; \}

Defined in: [src/types/image.ts:128](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L128)

Stream events for image generation.
