---
title: "Interface: ImageModelInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageModelInput

# Interface: ImageModelInput

Defined in: [src/types/image.ts:23](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/image.ts#L23)

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

Defined in: [src/types/image.ts:24](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/image.ts#L24)

***

### provider

> `readonly` **provider**: [`ProviderIdentity`](provideridentity.md)

Defined in: [src/types/image.ts:25](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/image.ts#L25)

***

### providerConfig?

> `readonly` `optional` **providerConfig**: `Partial`\<[`ProviderConfig`](providerconfig.md)\>

Defined in: [src/types/image.ts:27](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/types/image.ts#L27)

Optional provider configuration merged into requests
