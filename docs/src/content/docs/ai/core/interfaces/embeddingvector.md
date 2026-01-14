---
title: "Interface: EmbeddingVector"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingVector

# Interface: EmbeddingVector

Defined in: [src/types/provider.ts:363](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L363)

**`Internal`**

Single vector from provider response.

## Properties

### index

> **index**: `number`

Defined in: [src/types/provider.ts:367](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L367)

Index in input array

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/provider.ts:371](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L371)

Provider-specific per-embedding metadata

***

### tokens?

> `optional` **tokens**: `number`

Defined in: [src/types/provider.ts:369](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L369)

Token count for this input

***

### vector

> **vector**: `string` \| `number`[]

Defined in: [src/types/provider.ts:365](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/provider.ts#L365)

The embedding vector (floats or base64 string)
