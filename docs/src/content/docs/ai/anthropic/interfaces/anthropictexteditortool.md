---
title: "Interface: AnthropicTextEditorTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicTextEditorTool

# Interface: AnthropicTextEditorTool

Defined in: [src/providers/anthropic/types.ts:697](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L697)

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

Defined in: [src/providers/anthropic/types.ts:703](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L703)

Max characters for view truncation (20250728+ only)

***

### name

> **name**: `"str_replace_based_edit_tool"` \| `"str_replace_editor"`

Defined in: [src/providers/anthropic/types.ts:701](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L701)

Tool name (version-specific)

***

### type

> **type**: `"text_editor_20250728"` \| `"text_editor_20250124"`

Defined in: [src/providers/anthropic/types.ts:699](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/anthropic/types.ts#L699)

Tool type identifier (version-specific)
