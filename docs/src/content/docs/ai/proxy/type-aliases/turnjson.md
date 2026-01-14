---
title: "Type Alias: TurnJSON"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / TurnJSON

# Type Alias: TurnJSON

> **TurnJSON** = `Omit`\<[`Turn`](../../core/interfaces/turn.md), `"messages"` \| `"response"`\> & `object`

Defined in: [src/types/turn.ts:126](https://github.com/ProviderProtocol/ai/blob/6119c5b59e26af41fa847efb47d9abf792ee3fb5/src/types/turn.ts#L126)

Turn serialized to JSON format.
Messages are converted to MessageJSON, response is omitted (computed from messages).

## Type Declaration

### messages

> **messages**: [`MessageJSON`](../../core/type-aliases/messagejson.md)[]

## Remarks

This type is derived from [Turn](../../core/interfaces/turn.md) and should stay in sync with it.
