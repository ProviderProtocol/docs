---
title: "Interface: MessageMetadata"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageMetadata

# Interface: MessageMetadata

Defined in: [src/types/messages.ts:88](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/messages.ts#L88)

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
