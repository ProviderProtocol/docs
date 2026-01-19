---
title: "Interface: GoogleHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleHeaders

# Interface: GoogleHeaders

Defined in: [src/providers/google/types.ts:625](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L625)

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

Defined in: [src/providers/google/types.ts:627](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L627)

Client identification header for partners and libraries.

***

### x-goog-user-project?

> `optional` **x-goog-user-project**: `string`

Defined in: [src/providers/google/types.ts:629](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L629)

Quota project ID for Vertex AI billing.
