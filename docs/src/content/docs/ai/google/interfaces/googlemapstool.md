---
title: "Interface: GoogleMapsTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleMapsTool

# Interface: GoogleMapsTool

Defined in: [src/providers/google/types.ts:636](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L636)

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

Defined in: [src/providers/google/types.ts:638](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/google/types.ts#L638)

Google Maps configuration

#### enableWidget?

> `optional` **enableWidget**: `boolean`

Return widget context token for Places widget
