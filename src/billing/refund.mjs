import { integer } from '../core/values.mjs';

// Completed refunds and pending refunds both consume the capture.
export function reserveRefund(payment, amountCents) {
  integer(amountCents, 'amountCents', 1);
  integer(payment.capturedCents, 'capturedCents');
  integer(payment.refundedCents, 'refundedCents');
  integer(payment.pendingCents, 'pendingCents');
  const available = payment.capturedCents - payment.pendingCents;
  if (amountCents > available) {
    throw new RangeError('Refund exceeds the remaining capture');
  }
  return {
    ...payment,
    pendingCents: payment.pendingCents + amountCents,
  };
}

export function completeRefund(payment, amountCents) {
  integer(amountCents, 'amountCents', 1);
  if (amountCents > payment.pendingCents) {
    throw new RangeError('Refund has no reservation');
  }
  return {
    ...payment,
    pendingCents: payment.pendingCents - amountCents,
    refundedCents: payment.refundedCents + amountCents,
  };
}
