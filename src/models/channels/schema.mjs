export const kind = 'channels';

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
  locale: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  country: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  storefront: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  enabled: {
    type: 'boolean',
    default: false,
  },
  priority: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
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
