import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { removePost } from '../actions';
import { getPost } from '../reducers';
import Actions from './Actions';

const PostActions = ({
  editPath,
  handleRemove,
}) => (
  <Actions
    onEditClickPath={editPath}
    onRemoveClick={handleRemove}
  />
);

PostActions.propTypes = {
  editPath: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { postId }) => {
  const post = getPost(state, postId);

  return {
    editPath: `/${post.category}/${postId}/edit`,
  };
};

const mapDispatchToProps = (dispatch, { postId }) => ({
  handleRemove: () => dispatch(removePost(postId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostActions));
