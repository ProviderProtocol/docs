---
title: "Type Alias: AnthropicBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicBuiltInTool

# Type Alias: AnthropicBuiltInTool

> **AnthropicBuiltInTool** = [`AnthropicWebSearchTool`](../interfaces/anthropicwebsearchtool.md) \| [`AnthropicComputerTool`](../interfaces/anthropiccomputertool.md) \| [`AnthropicTextEditorTool`](../interfaces/anthropictexteditortool.md) \| [`AnthropicBashTool`](../interfaces/anthropicbashtool.md) \| [`AnthropicCodeExecutionTool`](../interfaces/anthropiccodeexecutiontool.md) \| [`AnthropicToolSearchTool`](../interfaces/anthropictoolsearchtool.md)

Defined in: [src/providers/anthropic/types.ts:781](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L781)

Union type for all Anthropic built-in tools.

Built-in tools run server-side and have special handling
different from user-defined function tools.
