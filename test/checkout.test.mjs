import assert from 'node:assert/strict';
import test from 'node:test';
import { setImmediate } from 'node:timers/promises';
import { applyDiscount, saveOrders } from '../src/checkout.mjs';

test('a 20 percent discount reduces 10000 cents to 8000 cents', () => {
  assert.equal(applyDiscount(10000, 20), 8000);
});

test('saving orders completes every write before returning success', async () => {
  const storedOrders = [];
  const result = await saveOrders([{ id: 'order-1' }], async (order) => {
    await setImmediate();
    storedOrders.push(order.id);
  });

  assert.deepEqual(storedOrders, ['order-1']);
  assert.deepEqual(result, { saved: 1 });
});
