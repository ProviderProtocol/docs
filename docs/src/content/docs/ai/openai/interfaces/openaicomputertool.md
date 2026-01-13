---
title: "Interface: OpenAIComputerTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIComputerTool

# Interface: OpenAIComputerTool

Defined in: [src/providers/openai/types.ts:1208](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1208)

Computer tool for Responses API
Enables the model to interact with computer interfaces

## Properties

### computer?

> `optional` **computer**: `object`

Defined in: [src/providers/openai/types.ts:1211](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1211)

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

Defined in: [src/providers/openai/types.ts:1209](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/openai/types.ts#L1209)
