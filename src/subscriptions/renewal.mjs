import { integer } from '../core/values.mjs';

// Missed intervals coalesce. The next boundary must be after now.
export function nextRenewalAt(nextAt, periodMs, now) {
  integer(nextAt, 'nextAt');
  integer(periodMs, 'periodMs', 1);
  integer(now, 'now');
  if (now < nextAt) {
    return nextAt;
  }
  return nextAt + periodMs;
}

export function renew(subscription, now) {
  if (!subscription.autoRenew || now < subscription.nextAt) {
    return { subscription, charge: null };
  }
  const nextAt = nextRenewalAt(subscription.nextAt, subscription.periodMs, now);
  return {
    subscription: { ...subscription, nextAt },
    charge: {
      customerId: subscription.customerId,
      amountCents: subscription.priceCents,
      currency: subscription.currency,
      periodStart: subscription.nextAt,
      periodEnd: nextAt,
    },
  };
}
