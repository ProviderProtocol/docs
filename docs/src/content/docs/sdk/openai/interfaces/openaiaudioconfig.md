---
title: "Interface: OpenAIAudioConfig"
---

[**@providerprotocol/ai**](../../README.md)

***

[@providerprotocol/ai](../../modules.md) / [openai](../README.md) / OpenAIAudioConfig

# Interface: OpenAIAudioConfig

Defined in: [src/providers/openai/types.ts:28](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L28)

Audio output configuration for Chat Completions API.

Enables audio output generation when using models that support
the audio modality. Requires `modalities: ['text', 'audio']`.

## Properties

### format

> **format**: `"wav"` \| `"aac"` \| `"mp3"` \| `"flac"` \| `"opus"` \| `"pcm16"`

Defined in: [src/providers/openai/types.ts:30](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L30)

Audio format for the generated output

***

### voice

> **voice**: `"alloy"` \| `"ash"` \| `"ballad"` \| `"coral"` \| `"echo"` \| `"sage"` \| `"shimmer"` \| `"verse"` \| `"marin"` \| `"cedar"`

Defined in: [src/providers/openai/types.ts:32](https://github.com/ProviderProtocol/ai/blob/1371aa52f0fff5bd5bfdb45a7fdb59d2ae80d714/src/providers/openai/types.ts#L32)

Voice model to use for audio generation
