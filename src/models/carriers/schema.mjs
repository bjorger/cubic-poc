export const kind = 'carriers';

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
  serviceCode: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  country: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  trackingPrefix: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  maxWeight: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  enabled: {
    type: 'boolean',
    default: false,
  },
  supportEmail: {
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
  'name',
  'serviceCode',
];
