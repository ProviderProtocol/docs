---
title: "Interface: OpenAIAudioConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIAudioConfig

# Interface: OpenAIAudioConfig

Defined in: [src/providers/openai/types.ts:28](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/openai/types.ts#L28)

Audio output configuration for Chat Completions API.

Enables audio output generation when using models that support
the audio modality. Requires `modalities: ['text', 'audio']`.

## Properties

### format

> **format**: `"wav"` \| `"aac"` \| `"mp3"` \| `"flac"` \| `"opus"` \| `"pcm16"`

Defined in: [src/providers/openai/types.ts:30](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/openai/types.ts#L30)

Audio format for the generated output

***

### voice

> **voice**: `"alloy"` \| `"ash"` \| `"ballad"` \| `"coral"` \| `"echo"` \| `"sage"` \| `"shimmer"` \| `"verse"` \| `"marin"` \| `"cedar"`

Defined in: [src/providers/openai/types.ts:32](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/providers/openai/types.ts#L32)

Voice model to use for audio generation
