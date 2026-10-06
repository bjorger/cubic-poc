# Commerce model

This sample contains an in-memory commerce domain. It has no HTTP server and no external service credentials. The caller supplies a trusted tenant identifier and a clock value.

## Records

Each resource declares its fields, default values, and accepted types. A record starts in `draft`. It can become `active` or `archived`. An archived record cannot change. These states describe record lifecycle, not payment settlement.

The context supplies the identifier, tenant, and creation time. Input fields cannot replace those values. Updates preserve identity and advance the revision. Public views omit the tenant identifier. Callers must select the tenant before creating public views.

The store takes one tenant. It returns snapshots so callers cannot change saved values through a shared reference. The store has no durability or concurrent transaction support.

## Checkout

Money uses integer cents. Tax uses basis points. Invoice tax rounds once at the order level. A promotion applies from its start time until, but not including, its end time. Free shipping starts at 5000 cents of discounted subtotal.

Stock reservation is atomic within the synchronous in-memory call. An order can contain separate lines for the same SKU. Their combined quantity must fit the available stock. Releasing stock cannot exceed the reservation.

Completed and pending refunds both reduce the remaining captured amount. Reserving a refund does not complete it. A later operation moves the amount from pending to refunded.

## Queries

Record IDs are unique strings. List queries order records by ID. A continuation cursor identifies the last record already returned, so the next page starts strictly after it. Tenant selection happens before pagination.

## Background work

An order request ID is local to its tenant. Successful results stay cached for the lifetime of the request service. A failed request can be retried. This sample intentionally has no cross-process idempotency store.

Late subscription renewal coalesces missed intervals into one charge. Its next due boundary must be after the supplied clock value. A future subscription is left unchanged.

The delivery batch returns after all jobs complete. Results retain input order. Retry scheduling uses capped exponential delay. A queue with several processes needs an external claim protocol; this sample does not provide one.

## Run

Run `pnpm test` for the public contract tests. Run `pnpm demo` for a normal checkout. The repository is a review exercise. Do not deploy or merge it as a commerce service.
