import { integer, text } from '../../core/values.mjs';
import { pageAfter } from '../../pagination/page.mjs';
import { kind, statuses } from './schema.mjs';

export function forTenant(records, tenantId) {
  text(tenantId, 'tenantId');
  return records.filter(record =>
    record.kind === kind && record.tenantId === tenantId,
  );
}

export function withStatus(records, status) {
  if (!statuses.includes(status)) {
    throw new Error('Unknown status');
  }
  return records.filter(record => record.status === status);
}

export function changedSince(records, since) {
  integer(since, 'since');
  return records.filter(record => record.updatedAt > since);
}

export function page(records, options) {
  const scoped = forTenant(records, options.tenantId);
  const visible = options.status
    ? withStatus(scoped, options.status)
    : scoped;
  return pageAfter(visible, options.cursor, options.limit ?? 20);
}

export function countByStatus(records, tenantId) {
  const counts = {
    draft: 0,
    active: 0,
    archived: 0,
  };
  for (const record of forTenant(records, tenantId)) {
    counts[record.status] += 1;
  }
  return counts;
}
