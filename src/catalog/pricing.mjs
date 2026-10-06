import { integer } from '../core/values.mjs';

// A promotion applies in the half-open range [startsAt, endsAt).
export function applyPromotion(subtotal, promotion, now) {
  integer(subtotal, 'subtotal');
  integer(now, 'now');
  integer(promotion.startsAt, 'startsAt');
  integer(promotion.endsAt, 'endsAt', promotion.startsAt + 1);
  integer(promotion.basisPoints, 'basisPoints');
  if (promotion.basisPoints > 10000) {
    throw new RangeError('Discount exceeds the subtotal');
  }
  if (now < promotion.startsAt || now > promotion.endsAt) {
    return { subtotal, discount: 0, total: subtotal };
  }
  const discount = Math.round(subtotal * promotion.basisPoints / 10000);
  return {
    subtotal,
    discount,
    total: subtotal - discount,
  };
}

export function priceCart(lines, promotion, now) {
  const subtotal = lines.reduce((sum, line) => {
    integer(line.unitCents, 'unitCents');
    integer(line.quantity, 'quantity', 1);
    return sum + line.unitCents * line.quantity;
  }, 0);
  integer(subtotal, 'subtotal');
  if (!promotion) {
    return { subtotal, discount: 0, total: subtotal };
  }
  return applyPromotion(subtotal, promotion, now);
}
