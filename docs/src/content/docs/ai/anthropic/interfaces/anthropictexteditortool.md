---
title: "Interface: AnthropicTextEditorTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicTextEditorTool

# Interface: AnthropicTextEditorTool

Defined in: [src/providers/anthropic/types.ts:936](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L936)

Text editor tool for file viewing and editing.

Enables Claude to view, create, and edit files with
commands like view, str_replace, create, and insert.

No beta header required.

## Example

```typescript
const tool: AnthropicTextEditorTool = {
  type: 'text_editor_20250728',
  name: 'str_replace_based_edit_tool',
  max_characters: 10000,
};
```

## Properties

### max\_characters?

> `optional` **max\_characters**: `number`

Defined in: [src/providers/anthropic/types.ts:942](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L942)

Max characters for view truncation (20250728+ only)

***

### name

> **name**: `"str_replace_based_edit_tool"` \| `"str_replace_editor"`

Defined in: [src/providers/anthropic/types.ts:940](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L940)

Tool name (version-specific)

***

### type

> **type**: `"text_editor_20250728"` \| `"text_editor_20250124"`

Defined in: [src/providers/anthropic/types.ts:938](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/anthropic/types.ts#L938)

Tool type identifier (version-specific)
