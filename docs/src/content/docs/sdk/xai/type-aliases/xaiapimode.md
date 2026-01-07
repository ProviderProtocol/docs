---
title: "Type Alias: XAIAPIMode"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [xai](../README.md) / XAIAPIMode

# Type Alias: XAIAPIMode

> **XAIAPIMode** = `"completions"` \| `"responses"` \| `"messages"`

Defined in: [src/providers/xai/types.ts:205](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/xai/types.ts#L205)

API mode selector for the xAI provider.

xAI supports three distinct API modes, each with different capabilities:
- `completions`: OpenAI Chat Completions compatible (recommended, default)
- `responses`: OpenAI Responses compatible with stateful conversations
- `messages`: Anthropic Messages compatible for easy migration
