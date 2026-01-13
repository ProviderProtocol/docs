---
title: "Type Alias: AnthropicBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicBuiltInTool

# Type Alias: AnthropicBuiltInTool

> **AnthropicBuiltInTool** = [`AnthropicWebSearchTool`](../interfaces/anthropicwebsearchtool.md) \| [`AnthropicComputerTool`](../interfaces/anthropiccomputertool.md) \| [`AnthropicTextEditorTool`](../interfaces/anthropictexteditortool.md) \| [`AnthropicBashTool`](../interfaces/anthropicbashtool.md) \| [`AnthropicCodeExecutionTool`](../interfaces/anthropiccodeexecutiontool.md) \| [`AnthropicToolSearchTool`](../interfaces/anthropictoolsearchtool.md)

Defined in: [src/providers/anthropic/types.ts:940](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L940)

Union type for all Anthropic built-in tools.

Built-in tools run server-side and have special handling
different from user-defined function tools.
