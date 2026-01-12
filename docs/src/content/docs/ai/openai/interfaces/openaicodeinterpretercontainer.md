---
title: "Interface: OpenAICodeInterpreterContainer"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICodeInterpreterContainer

# Interface: OpenAICodeInterpreterContainer

Defined in: [src/providers/openai/types.ts:1128](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1128)

Code interpreter container configuration

## Properties

### file\_ids?

> `optional` **file\_ids**: `string`[]

Defined in: [src/providers/openai/types.ts:1134](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1134)

File IDs to make available in the container

***

### memory\_limit?

> `optional` **memory\_limit**: `string`

Defined in: [src/providers/openai/types.ts:1132](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1132)

Memory limit for the container (e.g., '1g', '4g')

***

### type

> **type**: `"auto"`

Defined in: [src/providers/openai/types.ts:1130](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1130)

Container type - 'auto' creates a new container
