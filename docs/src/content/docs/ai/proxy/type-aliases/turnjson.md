---
title: "Type Alias: TurnJSON"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / TurnJSON

# Type Alias: TurnJSON

> **TurnJSON** = `Omit`\<[`Turn`](../../core/interfaces/turn.md), `"messages"` \| `"response"`\> & `object`

Defined in: [src/types/turn.ts:118](https://github.com/ProviderProtocol/ai/blob/4c8c9341d87bac66988c6f38db5be70a018d036e/src/types/turn.ts#L118)

Turn serialized to JSON format.
Messages are converted to MessageJSON, response is omitted (computed from messages).

## Type Declaration

### messages

> **messages**: [`MessageJSON`](../../core/type-aliases/messagejson.md)[]
