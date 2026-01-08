---
title: "Function: timeoutError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / timeoutError

# Function: timeoutError()

> **timeoutError**(`timeout`, `provider`, `modality`): [`UPPError`](../../core/classes/upperror.md)

Defined in: [src/http/errors.ts:158](https://github.com/ProviderProtocol/ai/blob/ab3f02531d6211bb194c48c34b9c084008d48601/src/http/errors.ts#L158)

Creates a UPPError for request timeout.

Use this when the request exceeds the configured timeout duration
and is aborted by the AbortController.

## Parameters

### timeout

`number`

The timeout duration in milliseconds that was exceeded

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../core/type-aliases/modality.md)

Request modality for error context

## Returns

[`UPPError`](../../core/classes/upperror.md)

A UPPError with TIMEOUT code
