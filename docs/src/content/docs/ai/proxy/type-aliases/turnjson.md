---
title: "Type Alias: TurnJSON"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / TurnJSON

# Type Alias: TurnJSON

> **TurnJSON** = `Omit`\<[`Turn`](../../core/interfaces/turn.md), `"messages"` \| `"response"`\> & `object`

Defined in: [src/types/turn.ts:118](https://github.com/ProviderProtocol/ai/blob/0736054a56c72996c59cf16309ea94d3cbc1b951/src/types/turn.ts#L118)

Turn serialized to JSON format.
Messages are converted to MessageJSON, response is omitted (computed from messages).

## Type Declaration

### messages

> **messages**: [`MessageJSON`](../../core/type-aliases/messagejson.md)[]
