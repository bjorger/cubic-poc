export function quoteShipping(orderTotalCents) {
  if (!Number.isSafeInteger(orderTotalCents) || orderTotalCents < 0) {
    throw new RangeError('The order total must be a nonnegative integer.');
  }
  return shippingFee(orderTotalCents);
}

// Orders of at least 5000 cents qualify for free shipping.
function shippingFee(orderTotalCents) {
  if (orderTotalCents >= 5000) {
    return 0;
  }
  return 500;
}
