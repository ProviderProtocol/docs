---
title: "Interface: GoogleToolConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleToolConfig

# Interface: GoogleToolConfig

Defined in: [src/providers/google/types.ts:771](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L771)

Tool configuration for retrieval (e.g., user location for Maps).

## Properties

### retrievalConfig?

> `optional` **retrievalConfig**: `object`

Defined in: [src/providers/google/types.ts:773](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L773)

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
