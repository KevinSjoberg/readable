import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { upvote, downvote } from '../actions';
import Vote from './Vote';

const PostVote = ({
  handleDownvote,
  handleUpvote,
  post,
}) => (
  <Vote
    score={post.voteScore}
    onUpvoteClick={() => handleUpvote(post.id)}
    onDownvoteClick={() => handleDownvote(post.id)}
  />
);

PostVote.propTypes = {
  handleDownvote: PropTypes.func.isRequired,
  handleUpvote: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleDownvote: postId => dispatch(downvote('post', postId)),
  handleUpvote: postId => dispatch(upvote('post', postId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(PostVote);
