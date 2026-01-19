---
title: "Interface: GoogleGroundingMetadata"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleGroundingMetadata

# Interface: GoogleGroundingMetadata

Defined in: [src/providers/google/types.ts:791](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L791)

Grounding metadata returned with search/maps results.

## Properties

### googleMapsWidgetContextToken?

> `optional` **googleMapsWidgetContextToken**: `string`

Defined in: [src/providers/google/types.ts:821](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L821)

Google Maps widget context token

***

### groundingChunks?

> `optional` **groundingChunks**: `object`[]

Defined in: [src/providers/google/types.ts:799](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L799)

Grounding chunks (sources)

#### maps?

> `optional` **maps**: `object`

##### maps.placeId

> **placeId**: `string`

##### maps.title

> **title**: `string`

##### maps.uri

> **uri**: `string`

#### web?

> `optional` **web**: `object`

##### web.title

> **title**: `string`

##### web.uri

> **uri**: `string`

***

### groundingSupports?

> `optional` **groundingSupports**: `object`[]

Defined in: [src/providers/google/types.ts:811](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L811)

Grounding supports (citations)

#### confidenceScores

> **confidenceScores**: `number`[]

#### groundingChunkIndices

> **groundingChunkIndices**: `number`[]

#### segment

> **segment**: `object`

##### segment.endIndex

> **endIndex**: `number`

##### segment.startIndex

> **startIndex**: `number`

##### segment.text

> **text**: `string`

***

### searchEntryPoint?

> `optional` **searchEntryPoint**: `object`

Defined in: [src/providers/google/types.ts:795](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L795)

Search entry point with rendered HTML

#### renderedContent

> **renderedContent**: `string`

***

### webSearchQueries?

> `optional` **webSearchQueries**: `string`[]

Defined in: [src/providers/google/types.ts:793](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L793)

Web search queries executed
