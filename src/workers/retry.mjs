import { integer } from '../core/values.mjs';

export function retryAt(job, now, options) {
  integer(now, 'now');
  integer(job.attempts, 'attempts');
  integer(options.maxAttempts, 'maxAttempts', 1);
  integer(options.baseDelayMs, 'baseDelayMs', 1);
  integer(options.maxDelayMs, 'maxDelayMs', options.baseDelayMs);
  if (job.attempts >= options.maxAttempts) {
    return null;
  }
  const exponent = Math.min(job.attempts, 30);
  const delay = Math.min(
    options.maxDelayMs,
    options.baseDelayMs * 2 ** exponent,
  );
  return {
    ...job,
    attempts: job.attempts + 1,
    readyAt: now + delay,
  };
}
