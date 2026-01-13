---
title: "Interface: AnthropicTextEditorTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicTextEditorTool

# Interface: AnthropicTextEditorTool

Defined in: [src/providers/anthropic/types.ts:856](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/anthropic/types.ts#L856)

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

Defined in: [src/providers/anthropic/types.ts:862](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/anthropic/types.ts#L862)

Max characters for view truncation (20250728+ only)

***

### name

> **name**: `"str_replace_based_edit_tool"` \| `"str_replace_editor"`

Defined in: [src/providers/anthropic/types.ts:860](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/anthropic/types.ts#L860)

Tool name (version-specific)

***

### type

> **type**: `"text_editor_20250728"` \| `"text_editor_20250124"`

Defined in: [src/providers/anthropic/types.ts:858](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/providers/anthropic/types.ts#L858)

Tool type identifier (version-specific)
