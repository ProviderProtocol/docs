---
title: "Interface: LLMStreamResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMStreamResult

# Interface: LLMStreamResult

Defined in: [src/types/llm.ts:263](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L263)

**`Internal`**

Raw provider stream result.

An async iterable of stream events with a Promise that resolves
to the complete response after streaming finishes.

## Extends

- `AsyncIterable`\<[`StreamEvent`](streamevent.md)\>

## Properties

### response

> `readonly` **response**: `Promise`\<[`LLMResponse`](llmresponse.md)\>

Defined in: [src/types/llm.ts:265](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/types/llm.ts#L265)

Promise resolving to the complete response

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`StreamEvent`](streamevent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`StreamEvent`](streamevent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`
