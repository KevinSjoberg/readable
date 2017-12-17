import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from './Category';

const CategoryList = ({ selected, categories }) => (
  <div>
    {categories.map(({ name, path }) => (
      <Category key={path} selected={path === selected} name={name} path={path} />
    ))}
  </div>
);

CategoryList.defaultProps = {
  categories: [],
  selected: null,
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  selected: PropTypes.string,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(CategoryList);
