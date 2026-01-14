---
title: "Interface: AnthropicHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicHeaders

# Interface: AnthropicHeaders

Defined in: [src/providers/anthropic/types.ts:806](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L806)

Anthropic-specific HTTP headers for API requests.

## Example

```typescript
const headers: AnthropicHeaders = {
  'anthropic-beta': 'extended-cache-ttl-2025-04-11',
};
```

## Indexable

\[`key`: `string`\]: `string` \| `undefined`

## Properties

### anthropic-beta?

> `optional` **anthropic-beta**: `string`

Defined in: [src/providers/anthropic/types.ts:818](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L818)

Beta features header.

Comma-separated list of beta feature flags:
- `extended-cache-ttl-2025-04-11` - Enable 1-hour cache TTL
- `token-efficient-tools-2025-02-19` - Token-efficient tool encoding
- `computer-use-2025-01-24` - Computer use tool (Claude 4 models)
- `computer-use-2025-11-24` - Computer use tool (Claude Opus 4.5)
- `code-execution-2025-08-25` - Code execution tool
- `advanced-tool-use-2025-11-20` - Tool search tool
