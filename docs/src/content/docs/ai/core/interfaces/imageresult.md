---
title: "Interface: ImageResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageResult

# Interface: ImageResult

Defined in: [src/types/image.ts:114](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L114)

Result from generate() or edit() calls.

## Properties

### images

> **images**: [`GeneratedImage`](generatedimage.md)[]

Defined in: [src/types/image.ts:116](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L116)

Generated images

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/image.ts:119](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L119)

Provider-specific response metadata

***

### usage?

> `optional` **usage**: [`ImageUsage`](imageusage.md)

Defined in: [src/types/image.ts:122](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L122)

Usage/billing information
