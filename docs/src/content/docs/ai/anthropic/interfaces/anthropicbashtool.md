---
title: "Interface: AnthropicBashTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicBashTool

# Interface: AnthropicBashTool

Defined in: [src/providers/anthropic/types.ts:880](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L880)

Bash tool for shell command execution.

Enables Claude to execute bash commands in a shell session.
The session persists within the conversation.

No beta header required.

## Example

```typescript
const tool: AnthropicBashTool = {
  type: 'bash_20250124',
  name: 'bash',
};
```

## Properties

### name

> **name**: `"bash"`

Defined in: [src/providers/anthropic/types.ts:884](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L884)

Tool name - must be 'bash'

***

### type

> **type**: `"bash_20250124"`

Defined in: [src/providers/anthropic/types.ts:882](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L882)

Tool type identifier
