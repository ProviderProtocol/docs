---
title: "Interface: OpenAICodeInterpreterTool"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / OpenAICodeInterpreterTool

# Interface: OpenAICodeInterpreterTool

Defined in: [src/providers/openai/types.ts:1140](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1140)

Code interpreter tool for Responses API
Allows the model to write and run Python code

## Properties

### code\_interpreter?

> `optional` **code\_interpreter**: `object`

Defined in: [src/providers/openai/types.ts:1143](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1143)

Code interpreter configuration

#### container

> **container**: `string` \| [`OpenAICodeInterpreterContainer`](OpenAICodeInterpreterContainer.md)

Container configuration

***

### type

> **type**: `"code_interpreter"`

Defined in: [src/providers/openai/types.ts:1141](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1141)
