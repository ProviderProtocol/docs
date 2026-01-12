---
title: "Interface: AnthropicCodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicCodeExecutionTool

# Interface: AnthropicCodeExecutionTool

Defined in: [src/providers/anthropic/types.ts:903](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L903)

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

Defined in: [src/providers/anthropic/types.ts:907](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L907)

Tool name - must be 'code_execution'

***

### type

> **type**: `"code_execution_20250825"`

Defined in: [src/providers/anthropic/types.ts:905](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/anthropic/types.ts#L905)

Tool type identifier
