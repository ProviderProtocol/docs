---
title: "Variable: ai"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ai

# Variable: ai

> `const` **ai**: `object`

Defined in: [src/index.ts:68](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/index.ts#L68)

UPP namespace object providing alternative import style.

## Type Declaration

### embedding()

> **embedding**: \<`TParams`\>(`options`) => [`EmbeddingInstance`](../interfaces/embeddinginstance.md)\<`TParams`\>

Embedding instance factory

Creates an embedding instance configured with the specified options.

This is the primary factory function for creating embedding instances.
It validates provider capabilities, binds the model, and returns an
instance with an `embed` method for generating embeddings.

#### Type Parameters

##### TParams

`TParams` = `unknown`

Provider-specific parameter type

#### Parameters

##### options

[`EmbeddingOptions`](../interfaces/embeddingoptions.md)\<`TParams`\>

Configuration options for the embedding instance

#### Returns

[`EmbeddingInstance`](../interfaces/embeddinginstance.md)\<`TParams`\>

A configured embedding instance ready for use

#### Throws

When the provider does not support the embedding modality

#### Example

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

### image()

> **image**: \<`TParams`\>(`options`) => [`ImageInstance`](../interfaces/imageinstance.md)\<`TParams`\>

Image generation instance factory

Creates an image generation instance configured with the specified options.

This is the primary factory function for creating image generation instances.
It validates provider capabilities, binds the model, and returns an instance
with `generate`, `stream`, and `edit` methods.

#### Type Parameters

##### TParams

`TParams` = `unknown`

Provider-specific parameter type for model configuration

#### Parameters

##### options

[`ImageOptions`](../interfaces/imageoptions.md)\<`TParams`\>

Configuration options for the image instance

#### Returns

[`ImageInstance`](../interfaces/imageinstance.md)\<`TParams`\>

A configured image instance ready for generation

#### Throws

When the provider does not support the image modality

#### Example

```typescript
import { image } from 'upp';
import { openai } from 'upp/providers/openai';

const dalle = image({
  model: openai('dall-e-3'),
  params: { size: '1024x1024', quality: 'hd' }
});

const result = await dalle.generate('A sunset over mountains');
console.log(result.images.length);
```

### llm()

> **llm**: \<`TParams`\>(`options`) => [`LLMInstance`](../interfaces/llminstance.md)\<`TParams`\>

LLM instance factory

Creates an LLM instance configured with the specified options.

This is the primary factory function for creating LLM instances. It validates
provider capabilities, binds the model, and returns an instance with `generate`
and `stream` methods for inference.

#### Type Parameters

##### TParams

`TParams` = `unknown`

Provider-specific parameter type for model configuration

#### Parameters

##### options

[`LLMOptions`](../interfaces/llmoptions.md)\<`TParams`\>

Configuration options for the LLM instance

#### Returns

[`LLMInstance`](../interfaces/llminstance.md)\<`TParams`\>

A configured LLM instance ready for inference

#### Throws

When the provider does not support the LLM modality

#### Throws

When structured output is requested but not supported

#### Throws

When tools are provided but not supported

#### Example

```typescript
import { llm } from 'upp';
import { anthropic } from 'upp/providers/anthropic';

const assistant = llm({
  model: anthropic('claude-sonnet-4-20250514'),
  system: 'You are a helpful assistant.',
  tools: [myTool],
});

const turn = await assistant.generate('Hello, world!');
console.log(turn.text);
```

## Example

```typescript
import { ai } from '@providerprotocol/ai';

const model = ai.llm({
  model: openai('gpt-4o'),
  params: { max_tokens: 1000 }
});
```
