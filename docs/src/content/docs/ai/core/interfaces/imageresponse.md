---
title: "Interface: ImageResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageResponse

# Interface: ImageResponse

Defined in: [src/types/image.ts:275](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L275)

**`Internal`**

Response from provider's generate or edit method.

## Properties

### images

> **images**: [`GeneratedImage`](generatedimage.md)[]

Defined in: [src/types/image.ts:277](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L277)

Generated images

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/image.ts:280](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L280)

Provider-specific response metadata

***

### usage?

> `optional` **usage**: [`ImageUsage`](imageusage.md)

Defined in: [src/types/image.ts:283](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L283)

Usage information
