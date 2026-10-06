export const kind = 'allocations';

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
  locationId: {
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
  priority: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  strategy: {
    type: 'string',
    default: '',
    maxLength: 240,
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
