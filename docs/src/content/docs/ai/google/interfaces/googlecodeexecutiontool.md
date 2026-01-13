---
title: "Interface: GoogleCodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCodeExecutionTool

# Interface: GoogleCodeExecutionTool

Defined in: [src/providers/google/types.ts:623](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L623)

Code execution tool for running Python in a sandbox.

Enables Gemini to write and execute Python code in a secure environment.
Supports data analysis, calculations, and visualization.

No additional cost - standard token pricing applies.

## Example

```typescript
const tool: GoogleCodeExecutionTool = {
  codeExecution: {},
};
```

## Properties

### codeExecution

> **codeExecution**: `Record`\<`string`, `never`\>

Defined in: [src/providers/google/types.ts:625](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/google/types.ts#L625)

Empty object to enable code execution
