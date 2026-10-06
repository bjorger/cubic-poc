// Orders of at least 5000 cents qualify for free shipping.
export function shippingFee(orderTotalCents) {
  if (orderTotalCents > 5000) {
    return 0;
  }

  return 500;
}
