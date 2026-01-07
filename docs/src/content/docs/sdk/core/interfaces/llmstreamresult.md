---
title: "Interface: LLMStreamResult"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / LLMStreamResult

# Interface: LLMStreamResult

Defined in: [src/types/llm.ts:252](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L252)

**`Internal`**

Raw provider stream result.

An async iterable of stream events with a Promise that resolves
to the complete response after streaming finishes.

## Extends

- `AsyncIterable`\<[`StreamEvent`](StreamEvent.md)\>

## Properties

### response

> `readonly` **response**: `Promise`\<[`LLMResponse`](LLMResponse.md)\>

Defined in: [src/types/llm.ts:254](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/types/llm.ts#L254)

Promise resolving to the complete response

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`StreamEvent`](StreamEvent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`StreamEvent`](StreamEvent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`
