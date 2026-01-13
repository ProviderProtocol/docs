---
title: "Interface: GoogleGroundingMetadata"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleGroundingMetadata

# Interface: GoogleGroundingMetadata

Defined in: [src/providers/google/types.ts:787](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L787)

Grounding metadata returned with search/maps results.

## Properties

### googleMapsWidgetContextToken?

> `optional` **googleMapsWidgetContextToken**: `string`

Defined in: [src/providers/google/types.ts:817](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L817)

Google Maps widget context token

***

### groundingChunks?

> `optional` **groundingChunks**: `object`[]

Defined in: [src/providers/google/types.ts:795](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L795)

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

Defined in: [src/providers/google/types.ts:807](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L807)

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

Defined in: [src/providers/google/types.ts:791](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L791)

Search entry point with rendered HTML

#### renderedContent

> **renderedContent**: `string`

***

### webSearchQueries?

> `optional` **webSearchQueries**: `string`[]

Defined in: [src/providers/google/types.ts:789](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L789)

Web search queries executed
