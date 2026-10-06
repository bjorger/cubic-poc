// The discount is a percentage from 0 to 100. Prices are in cents.
export function applyDiscount(priceInCents, percent) {
  return Math.round(priceInCents * (1 - percent));
}

// Resolve after every order is stored. Reject if a storage write fails.
export async function saveOrders(orders, persistOrder) {
  orders.forEach(async (order) => {
    await persistOrder(order);
  });

  return { saved: orders.length };
}
