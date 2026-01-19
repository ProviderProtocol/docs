---
title: "Interface: ImageEditInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageEditInput

# Interface: ImageEditInput

Defined in: [src/types/image.ts:80](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L80)

Input for edit() operations.

## Properties

### image

> **image**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:82](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L82)

Base image to edit

***

### mask?

> `optional` **mask**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:85](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L85)

Mask indicating edit region (interpretation varies by provider)

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:88](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L88)

Edit instruction prompt
