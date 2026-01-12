---
title: "Interface: LLMStreamResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMStreamResult

# Interface: LLMStreamResult

Defined in: [src/types/llm.ts:287](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L287)

**`Internal`**

Raw provider stream result.

An async iterable of stream events with a Promise that resolves
to the complete response after streaming finishes.

## Extends

- `AsyncIterable`\<[`StreamEvent`](streamevent.md)\>

## Properties

### response

> `readonly` **response**: `Promise`\<[`LLMResponse`](llmresponse.md)\>

Defined in: [src/types/llm.ts:289](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/llm.ts#L289)

Promise resolving to the complete response

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`StreamEvent`](streamevent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`StreamEvent`](streamevent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`
