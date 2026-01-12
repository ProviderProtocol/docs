---
title: "Interface: GoogleToolConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleToolConfig

# Interface: GoogleToolConfig

Defined in: [src/providers/google/types.ts:691](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L691)

Tool configuration for retrieval (e.g., user location for Maps).

## Properties

### retrievalConfig?

> `optional` **retrievalConfig**: `object`

Defined in: [src/providers/google/types.ts:693](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L693)

Retrieval configuration

#### latLng?

> `optional` **latLng**: `object`

User location for "near me" queries

##### latLng.latitude

> **latitude**: `number`

User latitude

##### latLng.longitude

> **longitude**: `number`

User longitude
