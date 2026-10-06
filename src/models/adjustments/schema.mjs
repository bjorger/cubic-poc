export const kind = 'adjustments';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  orderId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  reason: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  currency: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  amountCents: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  approved: {
    type: 'boolean',
    default: false,
  },
  source: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  note: {
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
  'orderId',
  'reason',
];
