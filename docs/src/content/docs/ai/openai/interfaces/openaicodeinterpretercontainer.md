---
title: "Interface: OpenAICodeInterpreterContainer"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICodeInterpreterContainer

# Interface: OpenAICodeInterpreterContainer

Defined in: [src/providers/openai/types.ts:1127](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/providers/openai/types.ts#L1127)

Code interpreter container configuration

## Properties

### file\_ids?

> `optional` **file\_ids**: `string`[]

Defined in: [src/providers/openai/types.ts:1133](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/providers/openai/types.ts#L1133)

File IDs to make available in the container

***

### memory\_limit?

> `optional` **memory\_limit**: `string`

Defined in: [src/providers/openai/types.ts:1131](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/providers/openai/types.ts#L1131)

Memory limit for the container (e.g., '1g', '4g')

***

### type

> **type**: `"auto"`

Defined in: [src/providers/openai/types.ts:1129](https://github.com/ProviderProtocol/ai/blob/c1fa49d2a211d9e50c9b51e4dc1cbd9d945b925a/src/providers/openai/types.ts#L1129)

Container type - 'auto' creates a new container
