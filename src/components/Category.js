import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ selected, name, path }) => (
  <div>{name} - {path} - {selected.toString()}</div>
);

Category.propTypes = {
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
