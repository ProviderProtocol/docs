---
title: "Interface: GoogleMapsTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleMapsTool

# Interface: GoogleMapsTool

Defined in: [src/providers/google/types.ts:716](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L716)

Google Maps grounding tool for location-based queries.

Enables Gemini to search for places, businesses, and locations
using Google Maps data.

Pricing: $25 per 1,000 grounded prompts.

Note: Not supported in Gemini 3 models.

## Example

```typescript
const tool: GoogleMapsTool = {
  googleMaps: {
    enableWidget: true,
  },
};
```

## Properties

### googleMaps

> **googleMaps**: `object`

Defined in: [src/providers/google/types.ts:718](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L718)

Google Maps configuration

#### enableWidget?

> `optional` **enableWidget**: `boolean`

Return widget context token for Places widget
