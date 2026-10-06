import { integer } from '../core/values.mjs';

// Round the order's tax to the nearest cent. Half a cent rounds up.
export function invoiceTotals(lines, taxBasisPoints) {
  integer(taxBasisPoints, 'taxBasisPoints');
  if (taxBasisPoints > 10000) {
    throw new RangeError('Tax exceeds the supported rate');
  }
  if (!Array.isArray(lines) || !lines.length) {
    throw new Error('An invoice needs lines');
  }
  let subtotalCents = 0;
  for (const line of lines) {
    integer(line.unitCents, 'unitCents');
    integer(line.quantity, 'quantity', 1);
    subtotalCents += line.unitCents * line.quantity;
  }
  integer(subtotalCents, 'subtotalCents');
  const rawTax = subtotalCents * taxBasisPoints / 10000;
  const taxCents = Math.floor(rawTax);
  const totalCents = subtotalCents + taxCents;
  integer(totalCents, 'totalCents');
  return {
    subtotalCents,
    taxCents,
    totalCents,
  };
}

export function invoiceFor(order, taxBasisPoints) {
  return {
    orderId: order.id,
    currency: order.currency,
    ...invoiceTotals(order.lines, taxBasisPoints),
  };
}
