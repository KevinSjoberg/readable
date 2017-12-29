import uuidv4 from 'uuid/v4';

export const omit = (obj, ...keys) =>
  Object.keys(obj)
    .filter(key => keys.indexOf(key) < 0)
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});

export const pick = (obj, ...keys) =>
  Object.keys()
    .filter(key => keys.indexOf(key) >= 0)
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});

export const randomId = () =>
  uuidv4();
