---
title: "Type Alias: GoogleBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleBuiltInTool

# Type Alias: GoogleBuiltInTool

> **GoogleBuiltInTool** = [`GoogleSearchTool`](../interfaces/googlesearchtool.md) \| [`GoogleCodeExecutionTool`](../interfaces/googlecodeexecutiontool.md) \| [`GoogleUrlContextTool`](../interfaces/googleurlcontexttool.md) \| [`GoogleMapsTool`](../interfaces/googlemapstool.md) \| [`GoogleFileSearchTool`](../interfaces/googlefilesearchtool.md)

Defined in: [src/providers/google/types.ts:765](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L765)

Union type for all Google built-in tools.

Note: Google's built-in tools use a different structure than function tools.
They are passed directly in the tools array alongside functionDeclarations.
