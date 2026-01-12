---
title: "Interface: XAIWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIWebSearchTool

# Interface: XAIWebSearchTool

Defined in: [src/providers/xai/types.ts:306](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L306)

Web search tool for real-time web information retrieval.

Enables Grok to search the web for up-to-date information.
Pricing: $5 per 1,000 successful tool invocations.

## Example

```typescript
const tool: XAIWebSearchTool = {
  type: 'web_search',
  allowed_domains: ['wikipedia.org', 'github.com'],
};
```

## Properties

### allowed\_domains?

> `optional` **allowed\_domains**: `string`[]

Defined in: [src/providers/xai/types.ts:310](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L310)

Restrict to specific domains (max 5, mutually exclusive with excluded_domains)

***

### enable\_image\_understanding?

> `optional` **enable\_image\_understanding**: `boolean`

Defined in: [src/providers/xai/types.ts:314](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L314)

Enable image analysis from search results

***

### excluded\_domains?

> `optional` **excluded\_domains**: `string`[]

Defined in: [src/providers/xai/types.ts:312](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L312)

Exclude specific domains (max 5, mutually exclusive with allowed_domains)

***

### type

> **type**: `"web_search"`

Defined in: [src/providers/xai/types.ts:308](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L308)

Tool type identifier
