import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from './Category';

const CategoryList = props => (
  <div>
    {props.categories.map(({ name, path }) => (
      <Category key={path} name={name} path={path} />
    ))}
  </div>
);

CategoryList.defaultProps = {
  categories: [],
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(CategoryList);
