export const kind = 'assets';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  productId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  name: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  mediaType: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  location: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  width: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  height: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  altText: {
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
  'productId',
  'name',
];
