---
title: "Function: codeInterpreterTool()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / codeInterpreterTool

# Function: codeInterpreterTool()

> **codeInterpreterTool**(`options?`): [`OpenAICodeInterpreterTool`](../interfaces/openaicodeinterpretertool.md)

Defined in: [src/providers/openai/types.ts:1345](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L1345)

Creates a code interpreter tool configuration for the Responses API.

The code interpreter tool allows the model to write and execute Python code
in a sandboxed environment.

## Parameters

### options?

Optional container configuration

#### container?

`string` \| [`OpenAICodeInterpreterContainer`](../interfaces/openaicodeinterpretercontainer.md)

## Returns

[`OpenAICodeInterpreterTool`](../interfaces/openaicodeinterpretertool.md)

A code interpreter tool configuration object

## Example

```typescript
// Default configuration
const interpreter = codeInterpreterTool();

// With custom container settings
const customInterpreter = codeInterpreterTool({
  container: {
    type: 'auto',
    memory_limit: '4g',
    file_ids: ['file_abc123']
  }
});
```
