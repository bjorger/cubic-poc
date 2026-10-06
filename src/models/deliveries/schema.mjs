export const kind = 'deliveries';

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
  carrierId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  trackingCode: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  destination: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  attempts: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  delivered: {
    type: 'boolean',
    default: false,
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
  'carrierId',
];
