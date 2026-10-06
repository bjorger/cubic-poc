import assert from 'node:assert/strict';
import test from 'node:test';
import { createJob, readyJobs } from '../src/workers/dispatch.mjs';
import { retryAt } from '../src/workers/retry.mjs';
import { nextRenewalAt } from '../src/subscriptions/renewal.mjs';
import { orderRequests } from '../src/orders/idempotency.mjs';

test('only due jobs enter a bounded batch', () => {
  const jobs = [createJob('later', {}, 300), createJob('now', {}, 100)];
  assert.deepEqual(readyJobs(jobs, 200, 1).map(job => job.id), ['now']);
});

test('retries grow to a cap and eventually stop', () => {
  const options = { maxAttempts: 3, baseDelayMs: 10, maxDelayMs: 15 };
  const first = retryAt(createJob('one', {}, 0), 100, options);
  assert.equal(first.readyAt, 110);
  const second = retryAt(first, 200, options);
  assert.equal(second.readyAt, 215);
  const third = retryAt(second, 300, options);
  assert.equal(third.readyAt, 315);
  assert.equal(retryAt(third, 400, options), null);
});

test('an on-time renewal advances by one period', () => {
  assert.equal(nextRenewalAt(1000, 1000, 1000), 2000);
  assert.equal(nextRenewalAt(1000, 1000, 500), 1000);
});

test('concurrent retries share a request and failures allow another attempt', async () => {
  const requests = orderRequests();
  let calls = 0;
  const create = async () => ({ id: ++calls });
  const [first, second] = await Promise.all([
    requests.run('a', 'request-1', create),
    requests.run('a', 'request-1', create),
  ]);
  assert.equal(first.id, 1);
  assert.equal(second.id, 1);
  await assert.rejects(requests.run('a', 'request-2', async () => {
    throw new Error('temporary failure');
  }));
  const retried = await requests.run('a', 'request-2', create);
  assert.equal(retried.id, 2);
});
