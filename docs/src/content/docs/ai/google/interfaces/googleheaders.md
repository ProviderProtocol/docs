---
title: "Interface: GoogleHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleHeaders

# Interface: GoogleHeaders

Defined in: [src/providers/google/types.ts:532](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L532)

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

Defined in: [src/providers/google/types.ts:534](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L534)

Client identification header for partners and libraries.

***

### x-goog-user-project?

> `optional` **x-goog-user-project**: `string`

Defined in: [src/providers/google/types.ts:536](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/google/types.ts#L536)

Quota project ID for Vertex AI billing.
