---
title: "Interface: ImageEditRequest"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageEditRequest

# Interface: ImageEditRequest\<TParams\>

Defined in: [src/types/image.ts:251](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L251)

**`Internal`**

Request passed to providers for edit operations.

## Type Parameters

### TParams

`TParams` = `unknown`

## Properties

### config

> **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/image.ts:265](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L265)

Provider infrastructure config

***

### image

> **image**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:253](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L253)

Base image to edit

***

### mask?

> `optional` **mask**: [`Image`](../classes/image.md)

Defined in: [src/types/image.ts:256](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L256)

Edit mask

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/image.ts:262](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L262)

Provider-specific parameters

***

### prompt

> **prompt**: `string`

Defined in: [src/types/image.ts:259](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L259)

Edit instruction prompt

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/image.ts:268](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/image.ts#L268)

Abort signal for cancellation
