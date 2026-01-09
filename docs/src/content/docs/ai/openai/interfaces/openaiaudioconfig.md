---
title: "Interface: OpenAIAudioConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIAudioConfig

# Interface: OpenAIAudioConfig

Defined in: [src/providers/openai/types.ts:28](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L28)

Audio output configuration for Chat Completions API.

Enables audio output generation when using models that support
the audio modality. Requires `modalities: ['text', 'audio']`.

## Properties

### format

> **format**: `"wav"` \| `"aac"` \| `"mp3"` \| `"flac"` \| `"opus"` \| `"pcm16"`

Defined in: [src/providers/openai/types.ts:30](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L30)

Audio format for the generated output

***

### voice

> **voice**: `"alloy"` \| `"ash"` \| `"ballad"` \| `"coral"` \| `"echo"` \| `"sage"` \| `"shimmer"` \| `"verse"` \| `"marin"` \| `"cedar"`

Defined in: [src/providers/openai/types.ts:32](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/providers/openai/types.ts#L32)

Voice model to use for audio generation
