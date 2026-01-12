---
title: "Interface: EmbeddingModelInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingModelInput

# Interface: EmbeddingModelInput

Defined in: [src/types/embedding.ts:28](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L28)

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

Defined in: [src/types/embedding.ts:29](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L29)

***

### provider

> `readonly` **provider**: [`ProviderIdentity`](provideridentity.md)

Defined in: [src/types/embedding.ts:30](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L30)
