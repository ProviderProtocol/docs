---
title: "Interface: GoogleToolConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleToolConfig

# Interface: GoogleToolConfig

Defined in: [src/providers/google/types.ts:682](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L682)

Tool configuration for retrieval (e.g., user location for Maps).

## Properties

### retrievalConfig?

> `optional` **retrievalConfig**: `object`

Defined in: [src/providers/google/types.ts:684](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L684)

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
