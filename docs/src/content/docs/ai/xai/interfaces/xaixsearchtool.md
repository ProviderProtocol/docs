---
title: "Interface: XAIXSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIXSearchTool

# Interface: XAIXSearchTool

Defined in: [src/providers/xai/types.ts:332](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L332)

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

Defined in: [src/providers/xai/types.ts:336](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L336)

Limit to specific X handles (max 10, mutually exclusive with excluded_x_handles)

***

### enable\_image\_understanding?

> `optional` **enable\_image\_understanding**: `boolean`

Defined in: [src/providers/xai/types.ts:344](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L344)

Enable image analysis in posts

***

### enable\_video\_understanding?

> `optional` **enable\_video\_understanding**: `boolean`

Defined in: [src/providers/xai/types.ts:346](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L346)

Enable video analysis in posts

***

### excluded\_x\_handles?

> `optional` **excluded\_x\_handles**: `string`[]

Defined in: [src/providers/xai/types.ts:338](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L338)

Exclude specific X handles (max 10, "grok" excluded by default)

***

### from\_date?

> `optional` **from\_date**: `string`

Defined in: [src/providers/xai/types.ts:340](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L340)

Start date filter (YYYY-MM-DD)

***

### to\_date?

> `optional` **to\_date**: `string`

Defined in: [src/providers/xai/types.ts:342](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L342)

End date filter (YYYY-MM-DD)

***

### type

> **type**: `"x_search"`

Defined in: [src/providers/xai/types.ts:334](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L334)

Tool type identifier
