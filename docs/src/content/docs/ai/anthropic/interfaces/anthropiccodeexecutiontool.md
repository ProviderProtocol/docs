---
title: "Interface: AnthropicCodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicCodeExecutionTool

# Interface: AnthropicCodeExecutionTool

Defined in: [src/providers/anthropic/types.ts:904](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L904)

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

Defined in: [src/providers/anthropic/types.ts:908](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L908)

Tool name - must be 'code_execution'

***

### type

> **type**: `"code_execution_20250825"`

Defined in: [src/providers/anthropic/types.ts:906](https://github.com/ProviderProtocol/ai/blob/94111b2134ab64c6a897065c214032fc433bd2e7/src/providers/anthropic/types.ts#L906)

Tool type identifier
