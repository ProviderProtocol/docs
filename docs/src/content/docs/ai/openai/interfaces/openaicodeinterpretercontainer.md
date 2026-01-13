---
title: "Interface: OpenAICodeInterpreterContainer"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICodeInterpreterContainer

# Interface: OpenAICodeInterpreterContainer

Defined in: [src/providers/openai/types.ts:1174](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L1174)

Code interpreter container configuration

## Properties

### file\_ids?

> `optional` **file\_ids**: `string`[]

Defined in: [src/providers/openai/types.ts:1180](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L1180)

File IDs to make available in the container

***

### memory\_limit?

> `optional` **memory\_limit**: `string`

Defined in: [src/providers/openai/types.ts:1178](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L1178)

Memory limit for the container (e.g., '1g', '4g')

***

### type

> **type**: `"auto"`

Defined in: [src/providers/openai/types.ts:1176](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L1176)

Container type - 'auto' creates a new container
