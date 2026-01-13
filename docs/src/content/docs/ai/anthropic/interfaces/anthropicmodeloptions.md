---
title: "Interface: AnthropicModelOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicModelOptions

# Interface: AnthropicModelOptions

Defined in: [src/providers/anthropic/index.ts:29](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/index.ts#L29)

Options for configuring an Anthropic model reference.

## Example

```typescript
import { anthropic, betas } from 'provider-protocol/anthropic';

// Enable structured outputs beta
const model = anthropic('claude-sonnet-4-20250514', {
  betas: [betas.structuredOutputs],
});

// Enable multiple betas
const modelWithBetas = anthropic('claude-sonnet-4-20250514', {
  betas: [betas.structuredOutputs, betas.interleavedThinking],
});

// Use string values for new/unlisted betas
const modelWithCustomBeta = anthropic('claude-sonnet-4-20250514', {
  betas: ['new-beta-2025-12-01'],
});
```

## Properties

### betas?

> `optional` **betas**: `string`[]

Defined in: [src/providers/anthropic/index.ts:36](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/anthropic/index.ts#L36)

Beta features to enable for this model.

Use values from the `betas` export or pass arbitrary strings for new betas.
Multiple betas are combined into a comma-separated `anthropic-beta` header.
