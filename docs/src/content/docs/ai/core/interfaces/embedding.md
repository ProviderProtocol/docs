---
title: "Interface: Embedding"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Embedding

# Interface: Embedding

Defined in: [src/types/embedding.ts:83](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L83)

Single embedding vector result.

## Properties

### dimensions

> **dimensions**: `number`

Defined in: [src/types/embedding.ts:88](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L88)

Vector dimensionality

***

### index

> **index**: `number`

Defined in: [src/types/embedding.ts:91](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L91)

Index corresponding to input array position

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/embedding.ts:97](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L97)

Provider-specific per-embedding metadata

***

### tokens?

> `optional` **tokens**: `number`

Defined in: [src/types/embedding.ts:94](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L94)

Token count for this input (if provider reports)

***

### vector

> **vector**: `number`[]

Defined in: [src/types/embedding.ts:85](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L85)

The embedding vector
