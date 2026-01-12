---
title: "Interface: Embedding"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Embedding

# Interface: Embedding

Defined in: [src/types/embedding.ts:81](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L81)

Single embedding vector result.

## Properties

### dimensions

> **dimensions**: `number`

Defined in: [src/types/embedding.ts:86](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L86)

Vector dimensionality

***

### index

> **index**: `number`

Defined in: [src/types/embedding.ts:89](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L89)

Index corresponding to input array position

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/embedding.ts:95](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L95)

Provider-specific per-embedding metadata

***

### tokens?

> `optional` **tokens**: `number`

Defined in: [src/types/embedding.ts:92](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L92)

Token count for this input (if provider reports)

***

### vector

> **vector**: `number`[]

Defined in: [src/types/embedding.ts:83](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/embedding.ts#L83)

The embedding vector
