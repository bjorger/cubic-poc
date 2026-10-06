import assert from 'node:assert/strict';
import test from 'node:test';
import { quoteOrder } from '../src/orders/checkout.mjs';
import { quoteShipping } from '../src/shipping.mjs';
import { reserveStock, releaseStock } from '../src/inventory/reserve.mjs';
import { reserveRefund, completeRefund } from '../src/billing/refund.mjs';

test('a normal order includes tax and free shipping', () => {
  const quote = quoteOrder({
    currency: 'EUR',
    lines: [{ sku: 'one', unitCents: 2500, quantity: 2 }],
  }, { tenantId: 'shop-a', now: 100, taxBasisPoints: 2000 });
  assert.equal(quote.dueCents, 6000);
  assert.equal(quote.shippingCents, 0);
  assert.equal(quote.taxCents, 1000);
});

test('the shipping boundary is inclusive and validates public input', () => {
  assert.equal(quoteShipping(4999), 500);
  assert.equal(quoteShipping(5000), 0);
  assert.equal(quoteShipping(5001), 0);
  for (const invalid of [-1, 0.5, NaN, Infinity]) {
    assert.throws(() => quoteShipping(invalid), RangeError);
  }
});

test('a stock reservation and release restore availability', () => {
  const stock = new Map([['one', { onHand: 10, reserved: 0 }]]);
  const lines = [{ sku: 'one', quantity: 2 }];
  reserveStock(stock, lines);
  assert.equal(stock.get('one').reserved, 2);
  releaseStock(stock, lines);
  assert.equal(stock.get('one').reserved, 0);
});

test('a first refund moves from pending to completed', () => {
  const payment = { capturedCents: 1000, pendingCents: 0, refundedCents: 0 };
  const pending = reserveRefund(payment, 100);
  const completed = completeRefund(pending, 100);
  assert.equal(completed.pendingCents, 0);
  assert.equal(completed.refundedCents, 100);
  assert.equal(payment.refundedCents, 0);
});
