---
title: "Interface: OpenAIComputerTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIComputerTool

# Interface: OpenAIComputerTool

Defined in: [src/providers/openai/types.ts:1162](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1162)

Computer tool for Responses API
Enables the model to interact with computer interfaces

## Properties

### computer?

> `optional` **computer**: `object`

Defined in: [src/providers/openai/types.ts:1165](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1165)

Computer tool configuration

#### display\_height

> **display\_height**: `number`

Display height in pixels

#### display\_width

> **display\_width**: `number`

Display width in pixels

#### environment?

> `optional` **environment**: [`OpenAIComputerEnvironment`](openaicomputerenvironment.md)

Environment configuration

***

### type

> **type**: `"computer"`

Defined in: [src/providers/openai/types.ts:1163](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/openai/types.ts#L1163)
