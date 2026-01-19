---
title: "Interface: XAIXSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIXSearchTool

# Interface: XAIXSearchTool

Defined in: [src/providers/xai/types.ts:310](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L310)

X (Twitter) search tool for social media content.

Enables Grok to search X posts and profiles in real-time.
Pricing: $5 per 1,000 successful tool invocations.

## Example

```typescript
const tool: XAIXSearchTool = {
  type: 'x_search',
  allowed_x_handles: ['elonmusk', 'xai'],
  from_date: '2025-01-01',
};
```

## Properties

### allowed\_x\_handles?

> `optional` **allowed\_x\_handles**: `string`[]

Defined in: [src/providers/xai/types.ts:314](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L314)

Limit to specific X handles (max 10, mutually exclusive with excluded_x_handles)

***

### enable\_image\_understanding?

> `optional` **enable\_image\_understanding**: `boolean`

Defined in: [src/providers/xai/types.ts:322](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L322)

Enable image analysis in posts

***

### enable\_video\_understanding?

> `optional` **enable\_video\_understanding**: `boolean`

Defined in: [src/providers/xai/types.ts:324](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L324)

Enable video analysis in posts

***

### excluded\_x\_handles?

> `optional` **excluded\_x\_handles**: `string`[]

Defined in: [src/providers/xai/types.ts:316](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L316)

Exclude specific X handles (max 10, "grok" excluded by default)

***

### from\_date?

> `optional` **from\_date**: `string`

Defined in: [src/providers/xai/types.ts:318](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L318)

Start date filter (YYYY-MM-DD)

***

### to\_date?

> `optional` **to\_date**: `string`

Defined in: [src/providers/xai/types.ts:320](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L320)

End date filter (YYYY-MM-DD)

***

### type

> **type**: `"x_search"`

Defined in: [src/providers/xai/types.ts:312](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L312)

Tool type identifier
