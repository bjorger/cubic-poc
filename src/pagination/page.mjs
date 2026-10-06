import { integer } from '../core/values.mjs';

// IDs are unique strings. A cursor names the last row already returned.
export function pageAfter(records, cursor = null, limit = 20) {
  integer(limit, 'limit', 1);
  if (limit > 100) {
    throw new RangeError('The page limit is 100');
  }
  const ordered = [...records].sort((left, right) => {
    if (left.id === right.id) return 0;
    return left.id < right.id ? -1 : 1;
  });
  const remaining = ordered.filter(row => cursor === null || row.id > cursor);
  const items = remaining.slice(0, limit);
  const hasMore = remaining.length > limit;
  return {
    items,
    hasMore,
    nextCursor: hasMore ? items.at(-1).id : null,
  };
}

export function firstPage(records, limit = 20) {
  return pageAfter(records, null, limit);
}
