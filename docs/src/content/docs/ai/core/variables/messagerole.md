---
title: "Variable: MessageRole"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageRole

# Variable: MessageRole

> `const` **MessageRole**: `object`

Defined in: [src/types/messages.ts:51](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/types/messages.ts#L51)

Message role/type constants.

Use these constants instead of raw strings for type-safe message handling:

## Type Declaration

### Assistant

> `readonly` **Assistant**: `"assistant"` = `'assistant'`

Assistant/model response

### ToolResult

> `readonly` **ToolResult**: `"tool_result"` = `'tool_result'`

Tool execution result

### User

> `readonly` **User**: `"user"` = `'user'`

User message

## Example

```typescript
import { MessageRole, isUserMessage } from 'upp';

if (message.type === MessageRole.User) {
  console.log('User said:', message.text);
} else if (message.type === MessageRole.Assistant) {
  console.log('Assistant replied:', message.text);
}
```
