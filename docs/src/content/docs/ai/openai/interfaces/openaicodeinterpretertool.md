---
title: "Interface: OpenAICodeInterpreterTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICodeInterpreterTool

# Interface: OpenAICodeInterpreterTool

Defined in: [src/providers/openai/types.ts:1212](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openai/types.ts#L1212)

Code interpreter tool for Responses API
Allows the model to write and run Python code

## Properties

### code\_interpreter?

> `optional` **code\_interpreter**: `object`

Defined in: [src/providers/openai/types.ts:1215](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openai/types.ts#L1215)

Code interpreter configuration

#### container

> **container**: `string` \| [`OpenAICodeInterpreterContainer`](openaicodeinterpretercontainer.md)

Container configuration

***

### type

> **type**: `"code_interpreter"`

Defined in: [src/providers/openai/types.ts:1213](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/openai/types.ts#L1213)
