---
title: "Interface: BeforeCallResult"
---

[**@providerprotocol/ai**](../../../README.md)

***

[@providerprotocol/ai](../../../modules.md) / [@providerprotocol/ai](../README.md) / BeforeCallResult

# Interface: BeforeCallResult

Defined in: [src/types/tool.ts](https://github.com/ProviderProtocol/ai)

Result object for `onBeforeCall` hook when controlling execution and transforming parameters.

Return this from `onBeforeCall` to explicitly control whether execution proceeds
and optionally transform the parameters before the tool is called.

## Example

```typescript
const strategy: ToolUseStrategy = {
  onBeforeCall: async (tool, params) => {
    if (tool.name === 'search') {
      // Add default pagination
      return {
        proceed: true,
        params: { ...params, limit: 10, offset: 0 }
      };
    }
    // Proceed with original params
    return true;
  }
};
```

## Properties

### proceed

> **proceed**: `boolean`

Whether to proceed with tool execution.

If `false`, the tool will not be executed.

***

### params?

> `optional` **params**: `unknown`

Transformed parameters to use instead of the original params.

If not provided, the original parameters are used.

## See Also

- [ToolUseStrategy](ToolUseStrategy.md) - Strategy interface containing the hooks
- [AfterCallResult](AfterCallResult.md) - Result type for transforming tool output
