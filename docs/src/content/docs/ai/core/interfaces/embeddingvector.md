---
title: "Interface: EmbeddingVector"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingVector

# Interface: EmbeddingVector

Defined in: [src/types/provider.ts:365](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L365)

**`Internal`**

Single vector from provider response.

## Properties

### index

> **index**: `number`

Defined in: [src/types/provider.ts:369](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L369)

Index in input array

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/provider.ts:373](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L373)

Provider-specific per-embedding metadata

***

### tokens?

> `optional` **tokens**: `number`

Defined in: [src/types/provider.ts:371](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L371)

Token count for this input

***

### vector

> **vector**: `string` \| `number`[]

Defined in: [src/types/provider.ts:367](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/provider.ts#L367)

The embedding vector (floats or base64 string)
