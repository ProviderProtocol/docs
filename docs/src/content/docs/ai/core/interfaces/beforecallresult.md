---
title: "Interface: BeforeCallResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BeforeCallResult

# Interface: BeforeCallResult

Defined in: [src/types/tool.ts:167](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L167)

Result from onBeforeCall hook indicating whether to proceed and optionally transformed params.

## Properties

### params?

> `optional` **params**: `unknown`

Defined in: [src/types/tool.ts:171](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L171)

Transformed parameters to use instead of the original (optional)

***

### proceed

> **proceed**: `boolean`

Defined in: [src/types/tool.ts:169](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/tool.ts#L169)

Whether to proceed with tool execution
