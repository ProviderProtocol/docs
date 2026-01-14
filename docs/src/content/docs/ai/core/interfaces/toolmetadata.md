---
title: "Interface: ToolMetadata"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolMetadata

# Interface: ToolMetadata

Defined in: [src/types/tool.ts:26](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/tool.ts#L26)

Provider-namespaced metadata for tools.

Each provider can attach its own metadata under its namespace,
enabling provider-specific features like caching, strict mode, etc.

## Example

```typescript
const metadata: ToolMetadata = {
  anthropic: { cache_control: { type: 'ephemeral' } },
  openrouter: { cache_control: { type: 'ephemeral', ttl: '1h' } }
};
```

## Indexable

\[`provider`: `string`\]: `Record`\<`string`, `unknown`\> \| `undefined`
