---
title: "Interface: GoogleHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleHeaders

# Interface: GoogleHeaders

Defined in: [src/providers/google/types.ts:621](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L621)

Google Gemini-specific HTTP headers for API requests.

## Example

```typescript
const headers: GoogleHeaders = {
  'x-goog-api-client': 'myapp/1.0.0',
};
```

## Indexable

\[`key`: `string`\]: `string` \| `undefined`

## Properties

### x-goog-api-client?

> `optional` **x-goog-api-client**: `string`

Defined in: [src/providers/google/types.ts:623](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L623)

Client identification header for partners and libraries.

***

### x-goog-user-project?

> `optional` **x-goog-user-project**: `string`

Defined in: [src/providers/google/types.ts:625](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L625)

Quota project ID for Vertex AI billing.
