export const kind = 'subscriptions';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  customerId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  planId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  currency: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  priceCents: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  periodMs: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  nextAt: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  autoRenew: {
    type: 'boolean',
    default: false,
  },
};

export const metadata = [
  'id',
  'tenantId',
  'createdAt',
  'updatedAt',
  'revision',
  'status',
];

export const summaryFields = [
  'customerId',
  'planId',
];
