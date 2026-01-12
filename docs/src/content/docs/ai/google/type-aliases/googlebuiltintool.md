---
title: "Type Alias: GoogleBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleBuiltInTool

# Type Alias: GoogleBuiltInTool

> **GoogleBuiltInTool** = [`GoogleSearchTool`](../interfaces/googlesearchtool.md) \| [`GoogleCodeExecutionTool`](../interfaces/googlecodeexecutiontool.md) \| [`GoogleUrlContextTool`](../interfaces/googleurlcontexttool.md) \| [`GoogleMapsTool`](../interfaces/googlemapstool.md) \| [`GoogleFileSearchTool`](../interfaces/googlefilesearchtool.md)

Defined in: [src/providers/google/types.ts:681](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/google/types.ts#L681)

Union type for all Google built-in tools.

Note: Google's built-in tools use a different structure than function tools.
They are passed directly in the tools array alongside functionDeclarations.
