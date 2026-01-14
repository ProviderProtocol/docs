---
title: "Function: proxyModel()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / proxyModel

# Function: proxyModel()

> **proxyModel**(`endpoint`): [`ModelReference`](../../core/interfaces/modelreference.md)\<[`ProxyRequestOptions`](../interfaces/proxyrequestoptions.md)\>

Defined in: [src/providers/proxy/index.ts:65](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/proxy/index.ts#L65)

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
