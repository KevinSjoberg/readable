export const pick = (o, ...props) =>
  props.reduce((acc, prop) => ({ ...acc, [prop]: o[prop] }), {});
