---
title: "Interface: AnthropicWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicWebSearchTool

# Interface: AnthropicWebSearchTool

Defined in: [src/providers/anthropic/types.ts:630](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L630)

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

Defined in: [src/providers/anthropic/types.ts:638](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L638)

Whitelist domains (mutually exclusive with blocked_domains)

***

### blocked\_domains?

> `optional` **blocked\_domains**: `string`[]

Defined in: [src/providers/anthropic/types.ts:640](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L640)

Blacklist domains (mutually exclusive with allowed_domains)

***

### max\_uses?

> `optional` **max\_uses**: `number`

Defined in: [src/providers/anthropic/types.ts:636](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L636)

Maximum searches per request (default: unlimited)

***

### name

> **name**: `"web_search"`

Defined in: [src/providers/anthropic/types.ts:634](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L634)

Tool name - must be 'web_search'

***

### type

> **type**: `"web_search_20250305"`

Defined in: [src/providers/anthropic/types.ts:632](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L632)

Tool type identifier

***

### user\_location?

> `optional` **user\_location**: [`AnthropicUserLocation`](anthropicuserlocation.md)

Defined in: [src/providers/anthropic/types.ts:642](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L642)

User location for localized results
