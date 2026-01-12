---
title: "Interface: GoogleGroundingMetadata"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleGroundingMetadata

# Interface: GoogleGroundingMetadata

Defined in: [src/providers/google/types.ts:707](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L707)

Grounding metadata returned with search/maps results.

## Properties

### googleMapsWidgetContextToken?

> `optional` **googleMapsWidgetContextToken**: `string`

Defined in: [src/providers/google/types.ts:737](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L737)

Google Maps widget context token

***

### groundingChunks?

> `optional` **groundingChunks**: `object`[]

Defined in: [src/providers/google/types.ts:715](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L715)

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

Defined in: [src/providers/google/types.ts:727](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L727)

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

Defined in: [src/providers/google/types.ts:711](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L711)

Search entry point with rendered HTML

#### renderedContent

> **renderedContent**: `string`

***

### webSearchQueries?

> `optional` **webSearchQueries**: `string`[]

Defined in: [src/providers/google/types.ts:709](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L709)

Web search queries executed
