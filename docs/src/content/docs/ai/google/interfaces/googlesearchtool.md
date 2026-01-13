---
title: "Interface: GoogleSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleSearchTool

# Interface: GoogleSearchTool

Defined in: [src/providers/google/types.ts:650](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L650)

Google Search grounding tool for real-time web information.

Enables Gemini to search the web using Google Search for up-to-date information.
Results are returned with grounding metadata including sources and citations.

Pricing:
- Gemini 2.x and earlier: $35 per 1,000 grounded prompts
- Gemini 3.x: $14 per 1,000 search queries

## Example

```typescript
const tool: GoogleSearchTool = {
  googleSearch: {},
};
```

## Properties

### googleSearch

> **googleSearch**: `Record`\<`string`, `never`\>

Defined in: [src/providers/google/types.ts:652](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L652)

Empty object to enable Google Search grounding
