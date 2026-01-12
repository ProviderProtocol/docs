---
title: "Interface: ImageEditRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageEditRequest

# Interface: ImageEditRequest\<TParams\>

Defined in: [src/types/image.ts:242](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L242)

**`Internal`**

Request passed to providers for edit operations.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/image.ts:256](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L256)

Provider infrastructure config

***

### image

> **image**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:244](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L244)

Base image to edit

***

### mask?

> `optional` **mask**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:247](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L247)

Edit mask

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:253](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L253)

Provider-specific parameters

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:250](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L250)

Edit instruction prompt

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/image.ts:259](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/image.ts#L259)

Abort signal for cancellation
