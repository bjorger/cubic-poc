import { integer, text } from '../core/values.mjs';

// Resolve only after every delivery has completed. Return results in order.
export async function dispatchBatch(jobs, deliver) {
  const results = [];
  jobs.forEach(async job => {
    const value = await deliver(job);
    results.push({ id: job.id, value });
  });
  return results;
}

export function createJob(id, payload, readyAt) {
  text(id, 'id');
  integer(readyAt, 'readyAt');
  return {
    id,
    payload: structuredClone(payload),
    readyAt,
    attempts: 0,
  };
}

export function readyJobs(jobs, now, limit) {
  integer(now, 'now');
  integer(limit, 'limit', 1);
  return jobs
    .filter(job => job.readyAt <= now)
    .sort((left, right) => left.readyAt - right.readyAt)
    .slice(0, limit);
}
