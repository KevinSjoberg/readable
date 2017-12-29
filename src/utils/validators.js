export const anyOf = (...candidates) => (field, name, value) => (
  !candidates.some(candidate => candidate === value) ? `must be one of ${candidates.join(', ')}` : ''
);

export const required = (fields, name, value) => (
  value === '' ? 'must not be blank' : ''
);

export default (fields, validators) =>
  Object.keys(fields).reduce((errors, field) => {
    const errorMessage = (validators[field] || []).reduce((errMsg, validator) => (
      errMsg !== '' ? errMsg : validator(field, field, fields[field])
    ), '');

    return {
      fieldErrors: {
        ...errors.fieldErrors,
        [field]: errorMessage,
      },
      isValid: errors.isValid && errorMessage === '',
    };
  }, { fieldErrors: {}, isValid: true });
