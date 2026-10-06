export const kind = 'giftcards';

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
  issuedCents: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  balanceCents: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  expiresAt: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  customerId: {
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
  'code',
  'currency',
];
