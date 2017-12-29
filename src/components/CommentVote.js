import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { upvote, downvote } from '../actions';
import { getComment } from '../reducers';
import Vote from './Vote';

const CommentVote = ({
  handleDownvote,
  handleUpvote,
  commentId,
  score,
}) => (
  <Vote
    score={score}
    onUpvoteClick={() => handleUpvote(commentId)}
    onDownvoteClick={() => handleDownvote(commentId)}
  />
);

CommentVote.propTypes = {
  commentId: PropTypes.string.isRequired,
  handleDownvote: PropTypes.func.isRequired,
  handleUpvote: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  score: getComment(state, ownProps.commentId).voteScore,
});

const mapDispatchToProps = dispatch => ({
  handleDownvote: commentId => dispatch(downvote('comment', commentId)),
  handleUpvote: commentId => dispatch(upvote('comment', commentId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentVote);
