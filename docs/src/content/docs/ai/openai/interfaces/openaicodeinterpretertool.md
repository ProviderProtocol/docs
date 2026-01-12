---
title: "Interface: OpenAICodeInterpreterTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICodeInterpreterTool

# Interface: OpenAICodeInterpreterTool

Defined in: [src/providers/openai/types.ts:1140](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openai/types.ts#L1140)

Code interpreter tool for Responses API
Allows the model to write and run Python code

## Properties

### code\_interpreter?

> `optional` **code\_interpreter**: `object`

Defined in: [src/providers/openai/types.ts:1143](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openai/types.ts#L1143)

Code interpreter configuration

#### container

> **container**: `string` \| [`OpenAICodeInterpreterContainer`](openaicodeinterpretercontainer.md)

Container configuration

***

### type

> **type**: `"code_interpreter"`

Defined in: [src/providers/openai/types.ts:1141](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/openai/types.ts#L1141)
