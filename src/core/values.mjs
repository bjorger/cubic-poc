export function text(value, name) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new TypeError(`${name} must be text`);
  }
  return value.trim();
}

export function integer(value, name, minimum = 0) {
  if (!Number.isSafeInteger(value) || value < minimum) {
    throw new RangeError(`${name} is out of range`);
  }
  return value;
}

export function object(value, name) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new TypeError(`${name} must be an object`);
  }
  return value;
}

export function fields(input, definitions) {
  object(input, 'input');
  const result = {};
  for (const [name, spec] of Object.entries(definitions)) {
    let value = input[name] ?? spec.default;
    if (spec.type === 'string') {
      if (typeof value !== 'string') {
        throw new TypeError(`${name} must be text`);
      }
      value = value.trim();
      if (value.length > spec.maxLength) {
        throw new RangeError(`${name} is too long`);
      }
    }
    if (spec.type === 'number') {
      integer(value, name, spec.minimum);
      if (value > spec.maximum) {
        throw new RangeError(`${name} is too large`);
      }
    }
    if (spec.type === 'boolean' && typeof value !== 'boolean') {
      throw new TypeError(`${name} must be boolean`);
    }
    result[name] = value;
  }
  return result;
}

export function lifecycle(from, to) {
  const transitions = {
    draft: ['active', 'archived'],
    active: ['archived'],
    archived: [],
  };
  if (!transitions[from]?.includes(to)) {
    throw new Error(`Cannot change ${from} to ${to}`);
  }
  return to;
}
