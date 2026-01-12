---
title: "Interface: XAIServerSideToolUsage"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIServerSideToolUsage

# Interface: XAIServerSideToolUsage

Defined in: [src/providers/xai/types.ts:443](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L443)

Server-side tool usage tracking returned in responses.

## Properties

### code\_execution?

> `optional` **code\_execution**: `number`

Defined in: [src/providers/xai/types.ts:449](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L449)

Number of successful code executions

***

### file\_search?

> `optional` **file\_search**: `number`

Defined in: [src/providers/xai/types.ts:451](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L451)

Number of successful file searches

***

### web\_search?

> `optional` **web\_search**: `number`

Defined in: [src/providers/xai/types.ts:445](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L445)

Number of successful web searches

***

### x\_search?

> `optional` **x\_search**: `number`

Defined in: [src/providers/xai/types.ts:447](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/providers/xai/types.ts#L447)

Number of successful X searches
