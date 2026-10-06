export const kind = 'products';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  sku: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
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
  weight: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  categoryId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  enabled: {
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
  'sku',
  'name',
];
