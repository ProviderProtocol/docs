---
title: "Interface: GoogleGroundingMetadata"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleGroundingMetadata

# Interface: GoogleGroundingMetadata

Defined in: [src/providers/google/types.ts:740](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L740)

Grounding metadata returned with search/maps results.

## Properties

### googleMapsWidgetContextToken?

> `optional` **googleMapsWidgetContextToken**: `string`

Defined in: [src/providers/google/types.ts:770](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L770)

Google Maps widget context token

***

### groundingChunks?

> `optional` **groundingChunks**: `object`[]

Defined in: [src/providers/google/types.ts:748](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L748)

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

Defined in: [src/providers/google/types.ts:760](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L760)

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

Defined in: [src/providers/google/types.ts:744](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L744)

Search entry point with rendered HTML

#### renderedContent

> **renderedContent**: `string`

***

### webSearchQueries?

> `optional` **webSearchQueries**: `string`[]

Defined in: [src/providers/google/types.ts:742](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/google/types.ts#L742)

Web search queries executed
