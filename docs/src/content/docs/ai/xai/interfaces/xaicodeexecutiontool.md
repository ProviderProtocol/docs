---
title: "Interface: XAICodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAICodeExecutionTool

# Interface: XAICodeExecutionTool

Defined in: [src/providers/xai/types.ts:340](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L340)

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

Defined in: [src/providers/xai/types.ts:342](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L342)

Tool type identifier
