import assert from 'node:assert/strict';
import test from 'node:test';
import { resources } from '../src/core/registry.mjs';
import { createStore } from '../src/core/store.mjs';

test('each resource supports creation, change, and lifecycle transitions', () => {
  for (const [kind, resource] of Object.entries(resources)) {
    const record = resource.create({}, {
      id: `${kind}-1`,
      tenantId: 'shop-a',
      now: 100,
    });
    assert.equal(record.kind, kind);
    assert.equal(record.status, 'draft');
    const changed = resource.change(record, {}, 200);
    assert.equal(changed.revision, 2);
    assert.equal(record.revision, 1);
    const active = resource.transition(changed, 'active', 300);
    const archived = resource.transition(active, 'archived', 400);
    assert.equal(archived.status, 'archived');
    assert.throws(() => resource.change(archived, {}, 500));
    assert.throws(() => resource.transition(archived, 'active', 500));
  }
});

test('stores isolate tenant records and caller mutations', () => {
  const store = createStore('shop-a');
  const record = resources.customers.create({ displayName: 'Customer A' }, {
    id: 'customer-1', tenantId: 'shop-a', now: 100,
  });
  store.put(record);
  record.displayName = 'changed outside';
  assert.equal(store.get('customer-1').displayName, 'Customer A');
  const read = store.get('customer-1');
  read.displayName = 'changed after read';
  assert.equal(store.get('customer-1').displayName, 'Customer A');
  assert.throws(() => store.put({ ...record, tenantId: 'shop-b' }));
});

test('resource queries and views keep a tenant-scoped public projection', async () => {
  for (const [kind, resource] of Object.entries(resources)) {
    const query = await import(`../src/models/${kind}/query.mjs`);
    const view = await import(`../src/models/${kind}/view.mjs`);
    const a = resource.create({}, { id: 'a', tenantId: 'shop-a', now: 100 });
    const b = resource.create({}, { id: 'b', tenantId: 'shop-b', now: 200 });
    const page = query.page([b, a], { tenantId: 'shop-a', limit: 20 });
    assert.deepEqual(page.items.map(row => row.id), ['a']);
    assert.equal(page.hasMore, false);
    assert.equal(view.publicView(a).tenantId, undefined);
    assert.equal(view.summary(a).id, 'a');
    assert.equal(view.exportRows([a]).length, 1);
    assert.equal(query.changedSince([a, b], 150)[0].id, 'b');
    assert.deepEqual(query.countByStatus([a, b], 'shop-a'), {
      draft: 1, active: 0, archived: 0,
    });
  }
});
