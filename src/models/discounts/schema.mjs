export const kind = 'discounts';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  code: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  currency: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  value: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  minimumCents: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
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
  stackable: {
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
  'code',
  'currency',
];
