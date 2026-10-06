import assert from 'node:assert/strict';
import test from 'node:test';
import { shippingFee } from '../src/shipping.mjs';

test('an order of exactly 5000 cents qualifies for free shipping', () => {
  assert.equal(shippingFee(5000), 0);
});
