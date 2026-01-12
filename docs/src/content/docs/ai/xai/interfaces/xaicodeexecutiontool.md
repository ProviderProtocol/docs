---
title: "Interface: XAICodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAICodeExecutionTool

# Interface: XAICodeExecutionTool

Defined in: [src/providers/xai/types.ts:362](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L362)

Code execution tool for Python in a sandbox.

Enables Grok to write and execute Python code in a secure environment.
Pricing: $5 per 1,000 successful tool invocations.

## Example

```typescript
const tool: XAICodeExecutionTool = {
  type: 'code_interpreter',
};
```

## Properties

### type

> **type**: `"code_interpreter"`

Defined in: [src/providers/xai/types.ts:364](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/xai/types.ts#L364)

Tool type identifier
