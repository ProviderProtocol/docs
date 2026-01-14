---
title: "Interface: XAIHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIHeaders

# Interface: XAIHeaders

Defined in: [src/providers/xai/types.ts:1623](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/xai/types.ts#L1623)

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

Defined in: [src/providers/xai/types.ts:1625](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/xai/types.ts#L1625)

Client-generated request ID for tracing.
