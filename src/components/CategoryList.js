import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Category from './Category';
import { fetchCategories } from '../actions';

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map(category => (
          <Category key={category.path} {...category} />
        ))}
      </ul>
    );
  }
}

CategoryList.defaultProps = {
  categories: [],
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape(Category.propTypes)),
  fetchCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

export default connect(
  mapStateToProps,
  { fetchCategories },
)(CategoryList);
