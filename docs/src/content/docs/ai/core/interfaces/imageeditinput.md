---
title: "Interface: ImageEditInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageEditInput

# Interface: ImageEditInput

Defined in: [src/types/image.ts:69](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L69)

Input for edit() operations.

## Properties

### image

> **image**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:71](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L71)

Base image to edit

***

### mask?

> `optional` **mask**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:74](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L74)

Mask indicating edit region (interpretation varies by provider)

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:77](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/image.ts#L77)

Edit instruction prompt
