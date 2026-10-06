import { fields, integer, lifecycle, object, text } from '../../core/values.mjs';
import { definitions, kind } from './schema.mjs';

export function create(input, context) {
  object(context, 'context');
  const values = fields(input, definitions);
  const now = integer(context.now, 'now');
  return {
    ...values,
    id: text(context.id, 'id'),
    tenantId: text(context.tenantId, 'tenantId'),
    kind,
    status: 'draft',
    revision: 1,
    createdAt: now,
    updatedAt: now,
  };
}

export function change(record, patch, now) {
  object(patch, 'patch');
  integer(now, 'now', record.updatedAt);
  if (record.kind !== kind || record.status === 'archived') {
    throw new Error('Record cannot be changed');
  }
  const values = fields({ ...record, ...patch }, definitions);
  return {
    ...record,
    ...values,
    updatedAt: now,
    revision: record.revision + 1,
  };
}

export function transition(record, status, now) {
  integer(now, 'now', record.updatedAt);
  if (record.kind !== kind) {
    throw new Error('Wrong resource kind');
  }
  return {
    ...record,
    status: lifecycle(record.status, status),
    updatedAt: now,
    revision: record.revision + 1,
  };
}

export function clone(record) {
  return structuredClone(record);
}
