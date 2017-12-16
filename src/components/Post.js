import React from 'react';
import PropTypes from 'prop-types';

const Post = ({
  id,
  timestamp,
  title,
  body,
  author,
  category,
  voteScore,
  deleted,
  commentCount,
}) => (
  <div>
    <p>{id}</p>
    <p>{timestamp}</p>
    <p>{title}</p>
    <p>{body}</p>
    <p>{author}</p>
    <p>{category}</p>
    <p>{voteScore}</p>
    <p>{deleted}</p>
    <p>{commentCount}</p>
  </div>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  deleted: PropTypes.bool.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default Post;
