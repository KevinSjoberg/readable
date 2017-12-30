import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { downvotePost, upvotePost } from '../actions/posts';
import Vote from './Vote';

const PostVote = ({ post, ...rest }) => (
  <Vote
    score={post.voteScore}
    onDownvoteClick={() => rest.downvotePost(post.id)}
    onUpvoteClick={() => rest.upvotePost(post.id)}
  />
);

PostVote.propTypes = {
  downvotePost: PropTypes.func.isRequired,
  upvotePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(
  null,
  { downvotePost, upvotePost },
)(PostVote);
