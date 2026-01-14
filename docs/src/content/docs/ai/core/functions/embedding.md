---
title: "Function: embedding()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / embedding

# Function: embedding()

> **embedding**\<`TParams`\>(`options`): [`EmbeddingInstance`](../interfaces/embeddinginstance.md)\<`TParams`\>

Defined in: [src/core/embedding.ts:64](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/core/embedding.ts#L64)

Creates an embedding instance configured with the specified options.

This is the primary factory function for creating embedding instances.
It validates provider capabilities, binds the model, and returns an
instance with an `embed` method for generating embeddings.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Parameters

### options

[`EmbeddingOptions`](../interfaces/embeddingoptions.md)\<`TParams`\>

Configuration options for the embedding instance

## Returns

[`EmbeddingInstance`](../interfaces/embeddinginstance.md)\<`TParams`\>

A configured embedding instance ready for use

## Throws

When the provider does not support the embedding modality

## Example

```typescript
import { embedding } from 'upp';
import { openai } from 'upp/openai';

const embedder = embedding({
  model: openai('text-embedding-3-large'),
  params: { dimensions: 1536 }
});

// Single input
const result = await embedder.embed('Hello world');

// Batch input
const batch = await embedder.embed(['doc1', 'doc2', 'doc3']);

// Large-scale with progress
const stream = embedder.embed(documents, { chunked: true });
for await (const progress of stream) {
  console.log(`${progress.percent}% complete`);
}
```
