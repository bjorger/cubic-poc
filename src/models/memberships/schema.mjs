export const kind = 'memberships';

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
  startsAt: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  endsAt: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  seats: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  autoRenew: {
    type: 'boolean',
    default: false,
  },
  reference: {
    type: 'string',
    default: '',
    maxLength: 240,
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
