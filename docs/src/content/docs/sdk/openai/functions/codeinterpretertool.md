---
title: "Function: codeInterpreterTool()"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / codeInterpreterTool

# Function: codeInterpreterTool()

> **codeInterpreterTool**(`options?`): [`OpenAICodeInterpreterTool`](../interfaces/OpenAICodeInterpreterTool.md)

Defined in: [src/providers/openai/types.ts:1345](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L1345)

Creates a code interpreter tool configuration for the Responses API.

The code interpreter tool allows the model to write and execute Python code
in a sandboxed environment.

## Parameters

### options?

Optional container configuration

#### container?

`string` \| [`OpenAICodeInterpreterContainer`](../interfaces/OpenAICodeInterpreterContainer.md)

## Returns

[`OpenAICodeInterpreterTool`](../interfaces/OpenAICodeInterpreterTool.md)

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
