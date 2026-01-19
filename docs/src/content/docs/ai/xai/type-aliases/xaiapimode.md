---
title: "Type Alias: XAIAPIMode"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIAPIMode

# Type Alias: XAIAPIMode

> **XAIAPIMode** = `"completions"` \| `"responses"` \| `"messages"`

Defined in: [src/providers/xai/types.ts:238](https://github.com/ProviderProtocol/ai/blob/978bdaec9d2e6187458e85ae2efbc76e37cdc207/src/providers/xai/types.ts#L238)

API mode selector for the xAI provider.

xAI supports three distinct API modes, each with different capabilities:
- `completions`: OpenAI Chat Completions compatible (recommended, default)
- `responses`: OpenAI Responses compatible with stateful conversations
- `messages`: Anthropic Messages compatible for easy migration
