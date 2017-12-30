import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { fetchPosts } from '../actions/posts';
import { getSortedPosts } from '../reducers';
import PostList from './PostList';
import PostNav from './PostNav';

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

    return (
      <div>
        <PostNav />
        <PostList posts={posts} />
        <Button color="primary" tag={Link} to="/posts/new">Add post</Button>
      </div>
    );
  }
}

FilteredPostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  ...PostList.PropTypes,
};

const mapStateToProps = state => ({
  sortFilter: state.sortFilter,
  posts: getSortedPosts(state),
});

export default withRouter(connect(
  mapStateToProps,
  { fetchPosts },
)(FilteredPostList));
