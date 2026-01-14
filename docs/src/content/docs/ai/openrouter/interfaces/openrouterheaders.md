---
title: "Interface: OpenRouterHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterHeaders

# Interface: OpenRouterHeaders

Defined in: [src/providers/openrouter/types.ts:1443](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L1443)

OpenRouter-specific HTTP headers for API requests.

## Example

```typescript
const headers: OpenRouterHeaders = {
  'HTTP-Referer': 'https://myapp.example.com',
  'X-Title': 'My Application',
};
```

## Indexable

\[`key`: `string`\]: `string` \| `undefined`

## Properties

### HTTP-Referer?

> `optional` **HTTP-Referer**: `string`

Defined in: [src/providers/openrouter/types.ts:1445](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L1445)

Application URL for analytics and leaderboard tracking.

***

### X-Title?

> `optional` **X-Title**: `string`

Defined in: [src/providers/openrouter/types.ts:1447](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openrouter/types.ts#L1447)

Application name for analytics display.
