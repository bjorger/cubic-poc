export const kind = 'returns';

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
  sku: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  reason: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  quantity: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  amountCents: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  restock: {
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
  'orderId',
  'sku',
];
