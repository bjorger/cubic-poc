export const kind = 'locations';

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
  code: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  country: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  city: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  capacity: {
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
  'name',
  'code',
];
