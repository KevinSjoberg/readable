import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostList from './PostList';

const Home = ({ posts }) => (
  <PostList posts={posts} />
);

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

Home.defaultProps = {
  posts: [],
};

Home.propTypes = {
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

export default connect(mapStateToProps)(Home);