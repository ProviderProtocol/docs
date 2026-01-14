---
title: "Type Alias: GoogleBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleBuiltInTool

# Type Alias: GoogleBuiltInTool

> **GoogleBuiltInTool** = [`GoogleSearchTool`](../interfaces/googlesearchtool.md) \| [`GoogleCodeExecutionTool`](../interfaces/googlecodeexecutiontool.md) \| [`GoogleUrlContextTool`](../interfaces/googleurlcontexttool.md) \| [`GoogleMapsTool`](../interfaces/googlemapstool.md) \| [`GoogleFileSearchTool`](../interfaces/googlefilesearchtool.md)

Defined in: [src/providers/google/types.ts:761](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/google/types.ts#L761)

Union type for all Google built-in tools.

Note: Google's built-in tools use a different structure than function tools.
They are passed directly in the tools array alongside functionDeclarations.
