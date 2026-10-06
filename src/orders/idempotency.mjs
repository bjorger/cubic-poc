import { text } from '../core/values.mjs';

// Request IDs are unique within a tenant, not across tenants.
// Concurrent retries of one request share its pending result.
export function orderRequests() {
  const pending = new Map();

  async function run(tenantId, requestId, createOrder) {
    text(tenantId, 'tenantId');
    text(requestId, 'requestId');
    const key = JSON.stringify([tenantId, requestId]);
    if (pending.has(key)) {
      return pending.get(key);
    }
    const result = Promise.resolve().then(createOrder);
    pending.set(key, result);
    try {
      return await result;
    } catch (error) {
      pending.delete(key);
      throw error;
    }
  }

  function clear() {
    pending.clear();
  }

  return { run, clear };
}
