---
title: "Interface: ImageModelInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageModelInput

# Interface: ImageModelInput

Defined in: [src/types/image.ts:23](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L23)

Structural type for image model input.
Uses structural typing to avoid generic variance issues with Provider generics.

## Remarks

This type mirrors [ModelReference](modelreference.md) while keeping provider options
structurally compatible across providers.

## See

ModelReference

## Properties

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/image.ts:24](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L24)

***

### provider

> `readonly` **provider**: [`ProviderIdentity`](provideridentity.md)

Defined in: [src/types/image.ts:25](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L25)

***

### providerConfig?

> `readonly` `optional` **providerConfig**: `Partial`\<[`ProviderConfig`](providerconfig.md)\>

Defined in: [src/types/image.ts:27](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/image.ts#L27)

Optional provider configuration merged into requests
