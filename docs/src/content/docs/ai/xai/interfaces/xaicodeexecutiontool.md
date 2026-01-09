---
title: "Interface: XAICodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAICodeExecutionTool

# Interface: XAICodeExecutionTool

Defined in: [src/providers/xai/types.ts:365](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L365)

Code execution tool for Python in a sandbox.

Enables Grok to write and execute Python code in a secure environment.
Pricing: $5 per 1,000 successful tool invocations.

## Example

```typescript
const tool: XAICodeExecutionTool = {
  type: 'code_interpreter',
  container: {
    pip_packages: ['numpy', 'pandas'],
  },
};
```

## Properties

### container?

> `optional` **container**: `object`

Defined in: [src/providers/xai/types.ts:369](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L369)

Container configuration

#### pip\_packages?

> `optional` **pip\_packages**: `string`[]

Additional pip packages to install

***

### type

> **type**: `"code_interpreter"`

Defined in: [src/providers/xai/types.ts:367](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/xai/types.ts#L367)

Tool type identifier
