---
title: "Interface: EmbeddingModelInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingModelInput

# Interface: EmbeddingModelInput

Defined in: [src/types/embedding.ts:21](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L21)

Structural type for embedding model input.
Uses structural typing to avoid generic variance issues with Provider generics.

## Properties

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/embedding.ts:22](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L22)

***

### provider

> `readonly` **provider**: `object`

Defined in: [src/types/embedding.ts:23](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/embedding.ts#L23)

#### modalities

> `readonly` **modalities**: `object`

##### modalities.embedding?

> `optional` **embedding**: `unknown`

#### name

> `readonly` **name**: `string`

#### version

> `readonly` **version**: `string`
