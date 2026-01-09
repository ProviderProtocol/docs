---
title: "Interface: OpenAIPromptTemplate"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIPromptTemplate

# Interface: OpenAIPromptTemplate

Defined in: [src/providers/openai/types.ts:240](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L240)

Reference to a prompt template stored in OpenAI's system.

Allows using pre-defined prompt templates with variable substitution.

## Properties

### id

> **id**: `string`

Defined in: [src/providers/openai/types.ts:242](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L242)

Prompt template ID

***

### variables?

> `optional` **variables**: `Record`\<`string`, `string`\>

Defined in: [src/providers/openai/types.ts:244](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L244)

Variables to fill into the template
