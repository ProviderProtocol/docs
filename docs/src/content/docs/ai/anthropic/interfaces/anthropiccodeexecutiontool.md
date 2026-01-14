---
title: "Interface: AnthropicCodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicCodeExecutionTool

# Interface: AnthropicCodeExecutionTool

Defined in: [src/providers/anthropic/types.ts:975](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L975)

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

Defined in: [src/providers/anthropic/types.ts:979](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L979)

Tool name - must be 'code_execution'

***

### type

> **type**: `"code_execution_20250825"`

Defined in: [src/providers/anthropic/types.ts:977](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L977)

Tool type identifier
