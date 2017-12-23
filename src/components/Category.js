import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ name, path }) => (
  <li><Link to={path}>{name}</Link></li>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
