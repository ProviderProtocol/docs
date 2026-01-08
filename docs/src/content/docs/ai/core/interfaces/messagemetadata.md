---
title: "Interface: MessageMetadata"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageMetadata

# Interface: MessageMetadata

Defined in: [src/types/messages.ts:44](https://github.com/ProviderProtocol/ai/blob/974e5220fcaeb4809e60044f5211b3c7497a622e/src/types/messages.ts#L44)

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
