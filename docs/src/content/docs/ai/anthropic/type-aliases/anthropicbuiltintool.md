---
title: "Type Alias: AnthropicBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicBuiltInTool

# Type Alias: AnthropicBuiltInTool

> **AnthropicBuiltInTool** = [`AnthropicWebSearchTool`](../interfaces/anthropicwebsearchtool.md) \| [`AnthropicComputerTool`](../interfaces/anthropiccomputertool.md) \| [`AnthropicTextEditorTool`](../interfaces/anthropictexteditortool.md) \| [`AnthropicBashTool`](../interfaces/anthropicbashtool.md) \| [`AnthropicCodeExecutionTool`](../interfaces/anthropiccodeexecutiontool.md) \| [`AnthropicToolSearchTool`](../interfaces/anthropictoolsearchtool.md)

Defined in: [src/providers/anthropic/types.ts:1020](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L1020)

Union type for all Anthropic built-in tools.

Built-in tools run server-side and have special handling
different from user-defined function tools.
