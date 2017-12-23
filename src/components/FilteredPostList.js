import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostList from './PostList';

import { fetchPosts } from '../actions';

class FilteredPostList extends Component {
  componentDidMount() {
    const { match: { params: { category } } } = this.props;
    this.props.fetchPosts(category);
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { category } } } = this.props;
    const { match: { params: { category: prevCategory } } } = prevProps;
    if (category !== prevCategory) {
      this.props.fetchPosts(category);
    }
  }

  render() {
    const { posts } = this.props;
    return <PostList posts={posts} />;
  }
}

FilteredPostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  ...PostList.PropTypes,
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

export default withRouter(connect(
  mapStateToProps,
  { fetchPosts },
)(FilteredPostList));
