export const kind = 'customers';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  email: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  displayName: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  country: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  locale: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  groupId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  creditCents: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  marketing: {
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
  'email',
  'displayName',
];
