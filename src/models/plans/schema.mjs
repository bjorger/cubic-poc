export const kind = 'plans';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  name: {
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
  trialMs: {
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
  public: {
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
  'name',
  'currency',
];
