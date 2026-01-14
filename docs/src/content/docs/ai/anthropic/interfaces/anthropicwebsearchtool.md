---
title: "Interface: AnthropicWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicWebSearchTool

# Interface: AnthropicWebSearchTool

Defined in: [src/providers/anthropic/types.ts:860](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L860)

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

Defined in: [src/providers/anthropic/types.ts:868](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L868)

Whitelist domains (mutually exclusive with blocked_domains)

***

### blocked\_domains?

> `optional` **blocked\_domains**: `string`[]

Defined in: [src/providers/anthropic/types.ts:870](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L870)

Blacklist domains (mutually exclusive with allowed_domains)

***

### max\_uses?

> `optional` **max\_uses**: `number`

Defined in: [src/providers/anthropic/types.ts:866](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L866)

Maximum searches per request (default: unlimited)

***

### name

> **name**: `"web_search"`

Defined in: [src/providers/anthropic/types.ts:864](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L864)

Tool name - must be 'web_search'

***

### type

> **type**: `"web_search_20250305"`

Defined in: [src/providers/anthropic/types.ts:862](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L862)

Tool type identifier

***

### user\_location?

> `optional` **user\_location**: [`AnthropicUserLocation`](anthropicuserlocation.md)

Defined in: [src/providers/anthropic/types.ts:872](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L872)

User location for localized results
