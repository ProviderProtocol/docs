---
title: "Interface: AnthropicCodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicCodeExecutionTool

# Interface: AnthropicCodeExecutionTool

Defined in: [src/providers/anthropic/types.ts:984](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L984)

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

Defined in: [src/providers/anthropic/types.ts:988](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L988)

Tool name - must be 'code_execution'

***

### type

> **type**: `"code_execution_20250825"`

Defined in: [src/providers/anthropic/types.ts:986](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L986)

Tool type identifier
