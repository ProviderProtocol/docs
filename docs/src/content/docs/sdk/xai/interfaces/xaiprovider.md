---
title: "Interface: XAIProvider()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [xai](../README.md) / XAIProvider

# Interface: XAIProvider()

Defined in: [src/providers/xai/index.ts:54](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L54)

xAI provider with configurable API mode

xAI's APIs are compatible with OpenAI and Anthropic SDKs, supporting three API modes:
- Chat Completions API (OpenAI-compatible) - default, recommended
- Responses API (OpenAI Responses-compatible) - stateful conversations
- Messages API (Anthropic-compatible) - for migration from Anthropic

## Examples

```ts
// Using the Chat Completions API (default)
const model = xai('grok-4');
```

```ts
// Using the Responses API (stateful)
const model = xai('grok-4', { api: 'responses' });
```

```ts
// Using the Messages API (Anthropic-compatible)
const model = xai('grok-4', { api: 'messages' });
```

## Extends

- [`Provider`](../../@providerprotocol/ai/interfaces/Provider.md)\<[`XAIProviderOptions`](XAIProviderOptions.md)\>

## Call Signature

> **XAIProvider**(`modelId`, `options?`): [`ModelReference`](../../@providerprotocol/ai/interfaces/ModelReference.md)\<[`XAIProviderOptions`](XAIProviderOptions.md)\>

Defined in: [src/providers/xai/index.ts:60](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L60)

Create a model reference

### Parameters

#### modelId

`string`

The model identifier (e.g., 'grok-4', 'grok-4.1-fast', 'grok-3-mini')

#### options?

[`XAIProviderOptions`](XAIProviderOptions.md)

Provider options including API selection

### Returns

[`ModelReference`](../../@providerprotocol/ai/interfaces/ModelReference.md)\<[`XAIProviderOptions`](XAIProviderOptions.md)\>

## Call Signature

> **XAIProvider**(`modelId`, `options?`): [`ModelReference`](../../@providerprotocol/ai/interfaces/ModelReference.md)\<[`XAIProviderOptions`](XAIProviderOptions.md)\>

Defined in: [src/providers/xai/index.ts:54](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L54)

Creates a model reference with optional provider-specific options.

### Parameters

#### modelId

`string`

The model identifier

#### options?

[`XAIProviderOptions`](XAIProviderOptions.md)

Provider-specific options

### Returns

[`ModelReference`](../../@providerprotocol/ai/interfaces/ModelReference.md)\<[`XAIProviderOptions`](XAIProviderOptions.md)\>

A model reference for use with llm() or other functions

## Properties

### modalities

> `readonly` **modalities**: `object`

Defined in: [src/providers/xai/index.ts:69](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L69)

Supported modalities

#### llm

> **llm**: `LLMHandler`\<`XAILLMParamsUnion`\>

#### Overrides

[`Provider`](../../@providerprotocol/ai/interfaces/Provider.md).[`modalities`](../../@providerprotocol/ai/interfaces/Provider.md#modalities)

***

### name

> `readonly` **name**: `"xai"`

Defined in: [src/providers/xai/index.ts:63](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L63)

Provider name

#### Overrides

[`Provider`](../../@providerprotocol/ai/interfaces/Provider.md).[`name`](../../@providerprotocol/ai/interfaces/Provider.md#name)

***

### version

> `readonly` **version**: `string`

Defined in: [src/providers/xai/index.ts:66](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/index.ts#L66)

Provider version

#### Overrides

[`Provider`](../../@providerprotocol/ai/interfaces/Provider.md).[`version`](../../@providerprotocol/ai/interfaces/Provider.md#version)
