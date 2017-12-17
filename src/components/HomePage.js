import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostList from './PostList';

const HomePage = ({ posts }) => (
  <PostList posts={posts} />
);

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

HomePage.defaultProps = {
  posts: [],
};

HomePage.propTypes = {
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

export default connect(mapStateToProps)(HomePage);
