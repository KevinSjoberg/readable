import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { upvote, downvote } from '../actions';
import { getPost } from '../reducers';
import Vote from './Vote';

const PostVote = ({
  handleDownvote,
  handleUpvote,
  postId,
  score,
}) => (
  <Vote
    score={score}
    onUpvoteClick={() => handleUpvote(postId)}
    onDownvoteClick={() => handleDownvote(postId)}
  />
);

PostVote.propTypes = {
  handleDownvote: PropTypes.func.isRequired,
  handleUpvote: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  score: getPost(state, ownProps.postId).voteScore,
});

const mapDispatchToProps = dispatch => ({
  handleDownvote: postId => dispatch(downvote('post', postId)),
  handleUpvote: postId => dispatch(upvote('post', postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostVote);
