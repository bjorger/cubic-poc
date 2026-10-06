import { object, text } from './values.mjs';

// A caller selects one tenant. Reads return isolated snapshots.
export function createStore(tenantId) {
  tenantId = text(tenantId, 'tenantId');
  const records = new Map();

  function put(record) {
    object(record, 'record');
    if (record.tenantId !== tenantId) {
      throw new Error('Wrong tenant');
    }
    const key = text(record.id, 'id');
    records.set(key, structuredClone(record));
    return get(key);
  }

  function get(id) {
    const record = records.get(id);
    return record ? structuredClone(record) : null;
  }

  function remove(id) {
    return records.delete(id);
  }

  function list() {
    return [...records.values()].map(record => structuredClone(record));
  }

  function update(id, apply) {
    const record = get(id);
    if (!record) {
      throw new Error('Record not found');
    }
    const next = apply(record);
    if (next.id !== id) {
      throw new Error('Cannot change an identifier');
    }
    return put(next);
  }

  return { tenantId, put, get, remove, list, update };
}
