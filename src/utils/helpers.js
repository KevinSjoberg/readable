import uuidv4 from 'uuid/v4';

export const pick = (o, ...props) =>
  props.reduce((acc, prop) => ({ ...acc, [prop]: o[prop] }), {});

export const randomId = () =>
  uuidv4();
