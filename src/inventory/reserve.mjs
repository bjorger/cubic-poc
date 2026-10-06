import { integer, text } from '../core/values.mjs';

// Reserve all lines or none. Separate lines may refer to the same SKU.
export function reserveStock(stock, lines) {
  const requested = lines.map(line => ({
    sku: text(line.sku, 'sku'),
    quantity: integer(line.quantity, 'quantity', 1),
  }));
  const totals = new Map();
  for (const line of requested) {
    totals.set(line.sku, (totals.get(line.sku) ?? 0) + line.quantity);
  }
  const grouped = [...totals].map(([sku, quantity]) => ({ sku, quantity }));
  for (const line of grouped) {
    const row = stock.get(line.sku);
    if (!row || row.onHand - row.reserved < line.quantity) {
      throw new RangeError('Insufficient stock');
    }
  }
  for (const line of requested) {
    const row = stock.get(line.sku);
    row.reserved += line.quantity;
  }
  return requested;
}

export function releaseStock(stock, lines) {
  const amounts = new Map();
  for (const line of lines) {
    text(line.sku, 'sku');
    integer(line.quantity, 'quantity', 1);
    amounts.set(line.sku, (amounts.get(line.sku) ?? 0) + line.quantity);
  }
  for (const [sku, quantity] of amounts) {
    if (!stock.has(sku) || stock.get(sku).reserved < quantity) {
      throw new RangeError('Release exceeds the reservation');
    }
  }
  for (const [sku, quantity] of amounts) {
    stock.get(sku).reserved -= quantity;
  }
}
