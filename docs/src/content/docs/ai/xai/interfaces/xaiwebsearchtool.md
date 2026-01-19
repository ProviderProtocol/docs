---
title: "Interface: XAIWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIWebSearchTool

# Interface: XAIWebSearchTool

Defined in: [src/providers/xai/types.ts:284](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L284)

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

Defined in: [src/providers/xai/types.ts:288](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L288)

Restrict to specific domains (max 5, mutually exclusive with excluded_domains)

***

### enable\_image\_understanding?

> `optional` **enable\_image\_understanding**: `boolean`

Defined in: [src/providers/xai/types.ts:292](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L292)

Enable image analysis from search results

***

### excluded\_domains?

> `optional` **excluded\_domains**: `string`[]

Defined in: [src/providers/xai/types.ts:290](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L290)

Exclude specific domains (max 5, mutually exclusive with allowed_domains)

***

### type

> **type**: `"web_search"`

Defined in: [src/providers/xai/types.ts:286](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L286)

Tool type identifier
