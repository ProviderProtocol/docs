---
title: "Interface: XAIHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIHeaders

# Interface: XAIHeaders

Defined in: [src/providers/xai/types.ts:1599](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L1599)

xAI-specific HTTP headers for API requests.

## Example

```typescript
const headers: XAIHeaders = {
  'X-Client-Request-Id': 'trace-123',
};
```

## Indexable

\[`key`: `string`\]: `string` \| `undefined`

## Properties

### X-Client-Request-Id?

> `optional` **X-Client-Request-Id**: `string`

Defined in: [src/providers/xai/types.ts:1601](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L1601)

Client-generated request ID for tracing.
