import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';

import { fetchCategories } from '../actions';
import { getCategories } from '../reducers';
import Category from './Category';

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, currentCategory } = this.props;
    return (
      <ListGroup>
        {categories.map(category => (
          <Category key={category.path} active={category.name === currentCategory} {...category} />
        ))}
      </ListGroup>
    );
  }
}

CategoryList.defaultProps = {
  categories: [],
  currentCategory: '',
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  currentCategory: PropTypes.string,
  fetchCategories: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  currentCategory: ownProps.match.params.category,
});

export default connect(
  mapStateToProps,
  { fetchCategories },
)(CategoryList);
