---
title: "Interface: GoogleCodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCodeExecutionTool

# Interface: GoogleCodeExecutionTool

Defined in: [src/providers/google/types.ts:670](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L670)

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

Defined in: [src/providers/google/types.ts:672](https://github.com/ProviderProtocol/ai/blob/b3206c8fb7e61c5e2e0dbfa901643df90e877a3d/src/providers/google/types.ts#L672)

Empty object to enable code execution
