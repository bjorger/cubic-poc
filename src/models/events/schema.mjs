export const kind = 'events';

export const statuses = [
  'draft',
  'active',
  'archived',
];

export const definitions = {
  topic: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  subject: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  actorId: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  source: {
    type: 'string',
    default: '',
    maxLength: 240,
  },
  sequence: {
    type: 'number',
    default: 0,
    minimum: 0,
    maximum: 10000000000000,
  },
  delivered: {
    type: 'boolean',
    default: false,
  },
  detail: {
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
  'topic',
  'subject',
];
