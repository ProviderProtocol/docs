---
title: "Type Alias: XAIBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIBuiltInTool

# Type Alias: XAIBuiltInTool

> **XAIBuiltInTool** = [`XAIWebSearchTool`](../interfaces/xaiwebsearchtool.md) \| [`XAIXSearchTool`](../interfaces/xaixsearchtool.md) \| [`XAICodeExecutionTool`](../interfaces/xaicodeexecutiontool.md) \| [`XAIFileSearchTool`](../interfaces/xaifilesearchtool.md) \| [`XAIMcpTool`](../interfaces/xaimcptool.md)

Defined in: [src/providers/xai/types.ts:411](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L411)

Union type for all xAI built-in tools.

These tools are only available via the Responses API (`api: 'responses'`).
They run server-side and provide agentic capabilities.
