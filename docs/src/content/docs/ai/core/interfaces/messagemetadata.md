---
title: "Interface: MessageMetadata"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageMetadata

# Interface: MessageMetadata

Defined in: [src/types/messages.ts:87](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/types/messages.ts#L87)

Provider-namespaced metadata for messages.

Each provider can attach its own metadata under its namespace,
preventing conflicts between different providers.

## Example

```typescript
const metadata: MessageMetadata = {
  openai: { model: 'gpt-4', finishReason: 'stop' },
  anthropic: { model: 'claude-3', stopReason: 'end_turn' }
};
```

## Indexable

\[`provider`: `string`\]: `Record`\<`string`, `unknown`\> \| `undefined`
