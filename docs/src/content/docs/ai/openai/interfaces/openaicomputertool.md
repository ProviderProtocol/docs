---
title: "Interface: OpenAIComputerTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIComputerTool

# Interface: OpenAIComputerTool

Defined in: [src/providers/openai/types.ts:1208](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L1208)

Computer tool for Responses API
Enables the model to interact with computer interfaces

## Properties

### computer?

> `optional` **computer**: `object`

Defined in: [src/providers/openai/types.ts:1211](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L1211)

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

Defined in: [src/providers/openai/types.ts:1209](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/openai/types.ts#L1209)
