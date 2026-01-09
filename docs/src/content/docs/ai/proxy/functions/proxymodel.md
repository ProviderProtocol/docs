---
title: "Function: proxyModel()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / proxyModel

# Function: proxyModel()

> **proxyModel**(`endpoint`): [`ModelReference`](../../core/interfaces/modelreference.md)\<[`ProxyRequestOptions`](../interfaces/proxyrequestoptions.md)\>

Defined in: [src/providers/proxy/index.ts:58](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/proxy/index.ts#L58)

Shorthand for creating a proxy model reference with default model ID.

Creates a proxy provider and immediately returns a model reference using
'default' as the model identifier. Useful for simple single-endpoint setups.

## Parameters

### endpoint

`string`

The URL to proxy requests to

## Returns

[`ModelReference`](../../core/interfaces/modelreference.md)\<[`ProxyRequestOptions`](../interfaces/proxyrequestoptions.md)\>

A model reference for use with llm()

## Example

```typescript
import { proxyModel } from './providers/proxy';
import { llm } from './core/llm';

const model = llm({ model: proxyModel('/api/ai') });
const turn = await model.generate('Hello!');
```
