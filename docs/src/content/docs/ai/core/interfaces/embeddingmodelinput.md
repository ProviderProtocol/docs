---
title: "Interface: EmbeddingModelInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingModelInput

# Interface: EmbeddingModelInput

Defined in: [src/types/embedding.ts:28](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L28)

Structural type for embedding model input.
Uses structural typing to avoid generic variance issues with Provider generics.

## Remarks

This type mirrors [ModelReference](modelreference.md) while keeping provider options
structurally compatible across providers.

## See

ModelReference

## Properties

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/embedding.ts:29](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L29)

***

### provider

> `readonly` **provider**: [`ProviderIdentity`](provideridentity.md)

Defined in: [src/types/embedding.ts:30](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L30)

***

### providerConfig?

> `readonly` `optional` **providerConfig**: `Partial`\<[`ProviderConfig`](providerconfig.md)\>

Defined in: [src/types/embedding.ts:32](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/embedding.ts#L32)

Optional provider configuration merged into requests
