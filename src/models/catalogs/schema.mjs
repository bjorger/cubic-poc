export const kind = 'catalogs';

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
  channelId: {
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
  version: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  public: {
    type: 'boolean',
    default: false,
  },
  description: {
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
  'channelId',
];
