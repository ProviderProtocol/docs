---
title: "Interface: ImageEditInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageEditInput

# Interface: ImageEditInput

Defined in: [src/types/image.ts:71](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L71)

Input for edit() operations.

## Properties

### image

> **image**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:73](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L73)

Base image to edit

***

### mask?

> `optional` **mask**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:76](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L76)

Mask indicating edit region (interpretation varies by provider)

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:79](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L79)

Edit instruction prompt
