---
title: "Interface: AfterCallResult"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / AfterCallResult

# Interface: AfterCallResult

Defined in: [src/types/tool.ts](https://github.com/ProviderProtocol/ai)

Result object for `onAfterCall` hook when transforming the tool result.

Return this from `onAfterCall` to transform the result before it is
returned to the model. Useful for sanitizing sensitive data, truncating
large results, or reformatting output.

## Example

```typescript
const strategy: ToolUseStrategy = {
  onAfterCall: async (tool, params, result) => {
    if (tool.name === 'fetch_data') {
      // Sanitize sensitive fields
      return { result: redactPII(result) };
    }
    if (tool.name === 'get_users') {
      // Truncate large results
      return { result: result.slice(0, 100) };
    }
    // Return void to use original result
  }
};
```

## Properties

### result

> **result**: `unknown`

Transformed result to return to the model.

This value will be sent back to the model instead of the original
tool execution result.

## See Also

- [ToolUseStrategy](ToolUseStrategy.md) - Strategy interface containing the hooks
- [BeforeCallResult](BeforeCallResult.md) - Result type for transforming tool input
