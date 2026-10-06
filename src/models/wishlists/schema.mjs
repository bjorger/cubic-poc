export const kind = 'wishlists';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  customerId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
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
  itemCount: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  visible: {
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
  'customerId',
  'name',
];
