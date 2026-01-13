---
title: "Interface: AnthropicWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicWebSearchTool

# Interface: AnthropicWebSearchTool

Defined in: [src/providers/anthropic/types.ts:789](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/types.ts#L789)

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

Defined in: [src/providers/anthropic/types.ts:797](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/types.ts#L797)

Whitelist domains (mutually exclusive with blocked_domains)

***

### blocked\_domains?

> `optional` **blocked\_domains**: `string`[]

Defined in: [src/providers/anthropic/types.ts:799](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/types.ts#L799)

Blacklist domains (mutually exclusive with allowed_domains)

***

### max\_uses?

> `optional` **max\_uses**: `number`

Defined in: [src/providers/anthropic/types.ts:795](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/types.ts#L795)

Maximum searches per request (default: unlimited)

***

### name

> **name**: `"web_search"`

Defined in: [src/providers/anthropic/types.ts:793](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/types.ts#L793)

Tool name - must be 'web_search'

***

### type

> **type**: `"web_search_20250305"`

Defined in: [src/providers/anthropic/types.ts:791](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/types.ts#L791)

Tool type identifier

***

### user\_location?

> `optional` **user\_location**: [`AnthropicUserLocation`](anthropicuserlocation.md)

Defined in: [src/providers/anthropic/types.ts:801](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/types.ts#L801)

User location for localized results
