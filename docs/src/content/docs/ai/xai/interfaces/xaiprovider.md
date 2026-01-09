---
title: "Interface: XAIProvider()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIProvider

# Interface: XAIProvider()

Defined in: [src/providers/xai/index.ts:54](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/index.ts#L54)

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

- [`Provider`](../../core/interfaces/provider.md)\<[`XAIProviderOptions`](xaiprovideroptions.md)\>

## Call Signature

> **XAIProvider**(`modelId`, `options?`): [`ModelReference`](../../core/interfaces/modelreference.md)\<[`XAIProviderOptions`](xaiprovideroptions.md)\>

Defined in: [src/providers/xai/index.ts:60](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/index.ts#L60)

Create a model reference

### Parameters

#### modelId

`string`

The model identifier (e.g., 'grok-4', 'grok-4.1-fast', 'grok-3-mini')

#### options?

[`XAIProviderOptions`](xaiprovideroptions.md)

Provider options including API selection

### Returns

[`ModelReference`](../../core/interfaces/modelreference.md)\<[`XAIProviderOptions`](xaiprovideroptions.md)\>

## Call Signature

> **XAIProvider**(`modelId`, `options?`): [`ModelReference`](../../core/interfaces/modelreference.md)\<[`XAIProviderOptions`](xaiprovideroptions.md)\>

Defined in: [src/providers/xai/index.ts:54](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/index.ts#L54)

Creates a model reference with optional provider-specific options.

### Parameters

#### modelId

`string`

The model identifier

#### options?

[`XAIProviderOptions`](xaiprovideroptions.md)

Provider-specific options

### Returns

[`ModelReference`](../../core/interfaces/modelreference.md)\<[`XAIProviderOptions`](xaiprovideroptions.md)\>

A model reference for use with llm() or other functions

## Properties

### modalities

> `readonly` **modalities**: `object`

Defined in: [src/providers/xai/index.ts:69](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/index.ts#L69)

Supported modalities

#### llm

> **llm**: `LLMHandler`\<`XAILLMParamsUnion`\>

#### Overrides

[`Provider`](../../core/interfaces/provider.md).[`modalities`](../../core/interfaces/provider.md#modalities)

***

### name

> `readonly` **name**: `"xai"`

Defined in: [src/providers/xai/index.ts:63](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/index.ts#L63)

Provider name

#### Overrides

[`Provider`](../../core/interfaces/provider.md).[`name`](../../core/interfaces/provider.md#name)

***

### version

> `readonly` **version**: `string`

Defined in: [src/providers/xai/index.ts:66](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/index.ts#L66)

Provider version

#### Overrides

[`Provider`](../../core/interfaces/provider.md).[`version`](../../core/interfaces/provider.md#version)
