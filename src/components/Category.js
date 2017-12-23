import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';

const Category = ({ name, path, selected }) => (
  <ListGroupItem active={selected} tag={Link} to={path}>{name}</ListGroupItem>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
