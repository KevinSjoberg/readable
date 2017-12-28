import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)),
};

export default CommentList;
