import { integer, text } from '../core/values.mjs';
import { invoiceTotals } from '../billing/invoice.mjs';
import { priceCart } from '../catalog/pricing.mjs';
import { quoteShipping } from '../shipping.mjs';

export function quoteOrder(input, context) {
  text(context.tenantId, 'tenantId');
  text(input.currency, 'currency');
  integer(context.now, 'now');
  if (!Array.isArray(input.lines) || !input.lines.length) {
    throw new Error('An order needs lines');
  }
  const price = priceCart(input.lines, input.promotion, context.now);
  const totals = invoiceTotals([
    { unitCents: price.total, quantity: 1 },
  ], context.taxBasisPoints);
  const shippingCents = quoteShipping(price.total);
  return {
    tenantId: context.tenantId,
    currency: input.currency,
    discountCents: price.discount,
    ...totals,
    shippingCents,
    dueCents: totals.totalCents + shippingCents,
  };
}
