---
title: "Interface: AnthropicWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicWebSearchTool

# Interface: AnthropicWebSearchTool

Defined in: [src/providers/anthropic/types.ts:788](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L788)

Web search tool for real-time web information retrieval.

Enables Claude to search the web for up-to-date information.
No beta header required - this is a GA feature.

## Example

```typescript
const tool: AnthropicWebSearchTool = {
  type: 'web_search_20250305',
  name: 'web_search',
  max_uses: 5,
  allowed_domains: ['wikipedia.org', 'github.com'],
};
```

## Properties

### allowed\_domains?

> `optional` **allowed\_domains**: `string`[]

Defined in: [src/providers/anthropic/types.ts:796](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L796)

Whitelist domains (mutually exclusive with blocked_domains)

***

### blocked\_domains?

> `optional` **blocked\_domains**: `string`[]

Defined in: [src/providers/anthropic/types.ts:798](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L798)

Blacklist domains (mutually exclusive with allowed_domains)

***

### max\_uses?

> `optional` **max\_uses**: `number`

Defined in: [src/providers/anthropic/types.ts:794](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L794)

Maximum searches per request (default: unlimited)

***

### name

> **name**: `"web_search"`

Defined in: [src/providers/anthropic/types.ts:792](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L792)

Tool name - must be 'web_search'

***

### type

> **type**: `"web_search_20250305"`

Defined in: [src/providers/anthropic/types.ts:790](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L790)

Tool type identifier

***

### user\_location?

> `optional` **user\_location**: [`AnthropicUserLocation`](anthropicuserlocation.md)

Defined in: [src/providers/anthropic/types.ts:800](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L800)

User location for localized results
