import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostList from './PostList';
import CategoryList from './CategoryList';
import { fetchCategories, fetchPostsByCategory } from '../actions';

class CategoryPage extends Component {
  componentDidMount() {
    const { params: { category } } = this.props.match;

    this.props.fetchCategories();
    this.props.fetchPosts(category);
  }

  render() {
    const { posts, match: { params: { category } } } = this.props;
    return (
      <div>
        <CategoryList selected={category} />
        <PostList posts={posts} />
      </div>
    );
  }
}

CategoryPage.defaultProps = {
  posts: [],
};

CategoryPage.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    commentCount: PropTypes.number.isRequired,
  })),
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.posts.filter(post => (
    post.category === ownProps.match.params.category
  )),
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchPosts: category => dispatch(fetchPostsByCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
