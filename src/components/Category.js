import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ name, path }) => (
  <div>{name} - {path}</div>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
