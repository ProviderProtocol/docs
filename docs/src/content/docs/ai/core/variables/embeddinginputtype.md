---
title: "Variable: EmbeddingInputType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingInputType

# Variable: EmbeddingInputType

> `const` **EmbeddingInputType**: `object`

Defined in: [src/types/embedding.ts:23](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/types/embedding.ts#L23)

Input type hints for provider-specific embedding optimization.
Some providers optimize embeddings differently for queries vs documents.

## Type Declaration

### Document

> `readonly` **Document**: `"document"` = `'document'`

Input is a document to be stored/indexed

### Query

> `readonly` **Query**: `"query"` = `'query'`

Input is a query for retrieval/search
