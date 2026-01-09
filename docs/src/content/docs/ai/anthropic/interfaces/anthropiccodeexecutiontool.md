---
title: "Interface: AnthropicCodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicCodeExecutionTool

# Interface: AnthropicCodeExecutionTool

Defined in: [src/providers/anthropic/types.ts:745](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L745)

Code execution tool for sandboxed Python/Bash execution.

Enables Claude to write and execute code in a secure container
with pre-installed data science libraries.

Requires beta header: `code-execution-2025-08-25`

## Example

```typescript
const tool: AnthropicCodeExecutionTool = {
  type: 'code_execution_20250825',
  name: 'code_execution',
};
```

## Properties

### name

> **name**: `"code_execution"`

Defined in: [src/providers/anthropic/types.ts:749](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L749)

Tool name - must be 'code_execution'

***

### type

> **type**: `"code_execution_20250825"`

Defined in: [src/providers/anthropic/types.ts:747](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L747)

Tool type identifier
