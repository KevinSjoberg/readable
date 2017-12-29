import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';

const Category = ({ name, path, active }) => (
  <ListGroupItem active={active} tag={Link} to={`/${path}`}>{name}</ListGroupItem>
);

Category.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Category;
