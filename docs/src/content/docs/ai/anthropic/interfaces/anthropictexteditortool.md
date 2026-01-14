---
title: "Interface: AnthropicTextEditorTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicTextEditorTool

# Interface: AnthropicTextEditorTool

Defined in: [src/providers/anthropic/types.ts:927](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L927)

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

Defined in: [src/providers/anthropic/types.ts:933](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L933)

Max characters for view truncation (20250728+ only)

***

### name

> **name**: `"str_replace_based_edit_tool"` \| `"str_replace_editor"`

Defined in: [src/providers/anthropic/types.ts:931](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L931)

Tool name (version-specific)

***

### type

> **type**: `"text_editor_20250728"` \| `"text_editor_20250124"`

Defined in: [src/providers/anthropic/types.ts:929](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/providers/anthropic/types.ts#L929)

Tool type identifier (version-specific)
