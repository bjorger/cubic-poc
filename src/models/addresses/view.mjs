import { definitions, kind, summaryFields } from './schema.mjs';

export function publicView(record) {
  if (record.kind !== kind) {
    throw new Error('Wrong resource kind');
  }
  const view = {
    id: record.id,
    kind,
    status: record.status,
    revision: record.revision,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
  };
  for (const key of Object.keys(definitions)) {
    view[key] = record[key];
  }
  return view;
}

export function summary(record) {
  const view = publicView(record);
  const result = {
    id: view.id,
    kind: view.kind,
    status: view.status,
  };
  for (const key of summaryFields) {
    result[key] = view[key];
  }
  return result;
}

export function exportRows(records) {
  return records.map(record => publicView(record));
}
