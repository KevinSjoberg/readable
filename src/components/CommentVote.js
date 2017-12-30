import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { downvoteComment, upvoteComment } from '../actions';
import Vote from './Vote';

const CommentVote = ({ comment, ...rest }) => (
  <Vote
    score={comment.voteScore}
    onDownvoteClick={() => rest.downvoteComment(comment.id)}
    onUpvoteClick={() => rest.upvoteComment(comment.id)}
  />
);

CommentVote.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
  downvoteComment: PropTypes.func.isRequired,
  upvoteComment: PropTypes.func.isRequired,
};

export default connect(
  null,
  { downvoteComment, upvoteComment },
)(CommentVote);
