---
title: "google"
---

[**@providerprotocol/ai**](../README.md)

***

[@providerprotocol/ai](../modules.md) / google

# google

Google provider for UPP (Unified Provider Protocol)

This module exports the Google provider for use with Gemini models.
Google's Gemini models support multimodal inputs including text, images,
audio, and video.

## Example

```ts
import { google } from '@providerprotocol/ai/google';
import { llm } from '@providerprotocol/ai';

// Create an LLM instance with Gemini
const model = llm({
  model: google('gemini-2.0-flash'),
  params: { maxOutputTokens: 1000 }
});

// Generate a response
const turn = await model.generate('What is machine learning?');
console.log(turn.response.text);
```

## Interfaces

- [GoogleLLMParams](interfaces/GoogleLLMParams.md)

## Variables

- [google](variables/google.md)
