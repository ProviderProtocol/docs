---
title: "Interface: OpenAICodeInterpreterTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICodeInterpreterTool

# Interface: OpenAICodeInterpreterTool

Defined in: [src/providers/openai/types.ts:1141](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1141)

Code interpreter tool for Responses API
Allows the model to write and run Python code

## Properties

### code\_interpreter?

> `optional` **code\_interpreter**: `object`

Defined in: [src/providers/openai/types.ts:1144](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1144)

Code interpreter configuration

#### container

> **container**: `string` \| [`OpenAICodeInterpreterContainer`](openaicodeinterpretercontainer.md)

Container configuration

***

### type

> **type**: `"code_interpreter"`

Defined in: [src/providers/openai/types.ts:1142](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1142)
