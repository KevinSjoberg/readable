import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

PostList.defaultProps = {
  posts: [],
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)),
};

export default PostList;
