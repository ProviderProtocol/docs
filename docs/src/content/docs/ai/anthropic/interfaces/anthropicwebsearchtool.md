---
title: "Interface: AnthropicWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicWebSearchTool

# Interface: AnthropicWebSearchTool

Defined in: [src/providers/anthropic/types.ts:869](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L869)

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

Defined in: [src/providers/anthropic/types.ts:877](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L877)

Whitelist domains (mutually exclusive with blocked_domains)

***

### blocked\_domains?

> `optional` **blocked\_domains**: `string`[]

Defined in: [src/providers/anthropic/types.ts:879](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L879)

Blacklist domains (mutually exclusive with allowed_domains)

***

### max\_uses?

> `optional` **max\_uses**: `number`

Defined in: [src/providers/anthropic/types.ts:875](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L875)

Maximum searches per request (default: unlimited)

***

### name

> **name**: `"web_search"`

Defined in: [src/providers/anthropic/types.ts:873](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L873)

Tool name - must be 'web_search'

***

### type

> **type**: `"web_search_20250305"`

Defined in: [src/providers/anthropic/types.ts:871](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L871)

Tool type identifier

***

### user\_location?

> `optional` **user\_location**: [`AnthropicUserLocation`](anthropicuserlocation.md)

Defined in: [src/providers/anthropic/types.ts:881](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L881)

User location for localized results
