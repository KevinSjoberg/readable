import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { upvote, downvote } from '../actions';
import Vote from './Vote';

const CommentVote = ({
  comment,
  handleDownvote,
  handleUpvote,
}) => (
  <Vote
    score={comment.voteScore}
    onUpvoteClick={() => handleUpvote(comment.id)}
    onDownvoteClick={() => handleDownvote(comment.id)}
  />
);

CommentVote.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
  handleDownvote: PropTypes.func.isRequired,
  handleUpvote: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleDownvote: commentId => dispatch(downvote('comment', commentId)),
  handleUpvote: commentId => dispatch(upvote('comment', commentId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CommentVote);
