---
title: "Interface: EmbeddingInstance"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingInstance

# Interface: EmbeddingInstance\<TParams\>

Defined in: [src/types/embedding.ts:165](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L165)

Embedding instance returned by the embedding() function.

## Example

```typescript
const embedder = embedding({ model: openai('text-embedding-3-large') });

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

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### model

> `readonly` **model**: [`BoundEmbeddingModel`](boundembeddingmodel.md)\<`TParams`\>

Defined in: [src/types/embedding.ts:187](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L187)

The bound embedding model

***

### params

> `readonly` **params**: `TParams` \| `undefined`

Defined in: [src/types/embedding.ts:190](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L190)

Current parameters

## Methods

### embed()

#### Call Signature

> **embed**(`input`, `options?`): `Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

Defined in: [src/types/embedding.ts:173](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L173)

Generate embeddings for one or more inputs.

##### Parameters

###### input

Single input or array of inputs

[`EmbeddingInput`](../type-aliases/embeddinginput.md) | [`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

###### options?

[`EmbedOptions`](embedoptions.md) & `object`

Optional embed options

##### Returns

`Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

Promise<EmbeddingResult> or EmbeddingStream if chunked

#### Call Signature

> **embed**(`input`, `options`): [`EmbeddingStream`](embeddingstream.md)

Defined in: [src/types/embedding.ts:177](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L177)

##### Parameters

###### input

[`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

###### options

[`EmbedOptions`](embedoptions.md) & `object`

##### Returns

[`EmbeddingStream`](embeddingstream.md)

#### Call Signature

> **embed**(`input`, `options?`): [`EmbeddingStream`](embeddingstream.md) \| `Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

Defined in: [src/types/embedding.ts:181](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/types/embedding.ts#L181)

##### Parameters

###### input

[`EmbeddingInput`](../type-aliases/embeddinginput.md) | [`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

###### options?

[`EmbedOptions`](embedoptions.md)

##### Returns

[`EmbeddingStream`](embeddingstream.md) \| `Promise`\<[`EmbeddingResult`](embeddingresult.md)\>
