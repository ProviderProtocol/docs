---
title: "Function: networkError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / networkError

# Function: networkError()

> **networkError**(`error`, `provider`, `modality`): [`UPPError`](../../core/classes/upperror.md)

Defined in: [src/http/errors.ts:147](https://github.com/ProviderProtocol/ai/blob/d0a0f358c6b8c58fc9a8cd28150905af4f932d7a/src/http/errors.ts#L147)

Creates a UPPError for network failures (DNS, connection, etc.).

Use this when the request fails before receiving any HTTP response,
such as DNS resolution failures, connection refused, or network unreachable.

## Parameters

### error

`Error`

The underlying Error that caused the failure

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../core/type-aliases/modality.md)

Request modality for error context

## Returns

[`UPPError`](../../core/classes/upperror.md)

A UPPError with NETWORK_ERROR code and the original error attached
