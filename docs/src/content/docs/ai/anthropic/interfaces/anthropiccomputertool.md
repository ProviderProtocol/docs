---
title: "Interface: AnthropicComputerTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicComputerTool

# Interface: AnthropicComputerTool

Defined in: [src/providers/anthropic/types.ts:823](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L823)

Computer use tool for desktop automation.

Enables Claude to interact with computer interfaces through
mouse clicks, keyboard input, and screenshots.

Requires beta header:
- `computer-use-2025-11-24` for Claude Opus 4.5
- `computer-use-2025-01-24` for other Claude 4 models

## Example

```typescript
const tool: AnthropicComputerTool = {
  type: 'computer_20250124',
  name: 'computer',
  display_width_px: 1920,
  display_height_px: 1080,
};
```

## Properties

### display\_height\_px

> **display\_height\_px**: `number`

Defined in: [src/providers/anthropic/types.ts:831](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L831)

Display height in pixels

***

### display\_number?

> `optional` **display\_number**: `number`

Defined in: [src/providers/anthropic/types.ts:833](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L833)

X11 display number (optional)

***

### display\_width\_px

> **display\_width\_px**: `number`

Defined in: [src/providers/anthropic/types.ts:829](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L829)

Display width in pixels

***

### enable\_zoom?

> `optional` **enable\_zoom**: `boolean`

Defined in: [src/providers/anthropic/types.ts:835](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L835)

Enable zoom action (Opus 4.5 only with 20251124 version)

***

### name

> **name**: `"computer"`

Defined in: [src/providers/anthropic/types.ts:827](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L827)

Tool name - must be 'computer'

***

### type

> **type**: `"computer_20251124"` \| `"computer_20250124"`

Defined in: [src/providers/anthropic/types.ts:825](https://github.com/ProviderProtocol/ai/blob/614741d3e657e2226392006c7d3d94c1280bb181/src/providers/anthropic/types.ts#L825)

Tool type identifier (version-specific)
