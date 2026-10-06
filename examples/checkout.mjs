import { quoteOrder } from '../src/orders/checkout.mjs';

const quote = quoteOrder({
  currency: 'EUR',
  lines: [
    { sku: 'sample', unitCents: 2500, quantity: 2 },
  ],
}, {
  tenantId: 'sample-store',
  now: 1000,
  taxBasisPoints: 2000,
});

console.log(JSON.stringify(quote, null, 2));
