---
title: "Interface: ImageResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageResponse

# Interface: ImageResponse

Defined in: [src/types/image.ts:266](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L266)

**`Internal`**

Response from provider's generate or edit method.

## Properties

### images

> **images**: [`GeneratedImage`](generatedimage.md)[]

Defined in: [src/types/image.ts:268](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L268)

Generated images

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/image.ts:271](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L271)

Provider-specific response metadata

***

### usage?

> `optional` **usage**: [`ImageUsage`](imageusage.md)

Defined in: [src/types/image.ts:274](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L274)

Usage information
