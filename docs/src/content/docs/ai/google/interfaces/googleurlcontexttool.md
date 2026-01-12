---
title: "Interface: GoogleUrlContextTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleUrlContextTool

# Interface: GoogleUrlContextTool

Defined in: [src/providers/google/types.ts:612](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L612)

URL context tool for fetching and processing URLs.

Enables Gemini to fetch and analyze content from URLs.
Supports text, images, and PDF documents.

Limits:
- Maximum 20 URLs per request
- Maximum 34MB content per URL

## Example

```typescript
const tool: GoogleUrlContextTool = {
  urlContext: {},
};
```

## Properties

### urlContext

> **urlContext**: `Record`\<`string`, `never`\>

Defined in: [src/providers/google/types.ts:614](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L614)

Empty object to enable URL context
