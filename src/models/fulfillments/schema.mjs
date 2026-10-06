export const kind = 'fulfillments';

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
  locationId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  carrierId: {
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
  weight: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  packed: {
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
  'locationId',
];
