---
title: "Interface: GoogleCodeExecutionTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCodeExecutionTool

# Interface: GoogleCodeExecutionTool

Defined in: [src/providers/google/types.ts:674](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L674)

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

Defined in: [src/providers/google/types.ts:676](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/google/types.ts#L676)

Empty object to enable code execution
