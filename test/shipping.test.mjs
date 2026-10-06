import assert from 'node:assert/strict';
import test from 'node:test';
import { quoteShipping } from '../src/shipping.mjs';

test('the shipping quote follows the free-shipping threshold', () => {
  assert.equal(quoteShipping(4999), 500);
  assert.equal(quoteShipping(5000), 0);
  assert.equal(quoteShipping(5001), 0);
});

test('the public entry point rejects invalid order totals', () => {
  for (const value of [-1, 1.5, NaN, Infinity]) {
    assert.throws(() => quoteShipping(value), RangeError);
  }
});
