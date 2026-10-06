export const kind = 'addresses';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  recipient: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  street: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  city: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  region: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  postalCode: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  country: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  label: {
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
  'recipient',
  'street',
];
