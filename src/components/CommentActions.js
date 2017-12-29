import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { removeComment } from '../actions';
import { getPostById, getCommentById } from '../reducers';
import Actions from './Actions';

const CommentActions = ({
  editPath,
  handleRemove,
}) => (
  <Actions
    onEditClickPath={editPath}
    onRemoveClick={handleRemove}
  />
);

CommentActions.propTypes = {
  editPath: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  commentId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, { commentId }) => {
  const { parentId } = getCommentById(state, commentId);
  const post = getPostById(state, parentId);

  return {
    editPath: `/${post.category}/${parentId}/comments/${commentId}/edit`,
  };
};

const mapDispatchToProps = (dispatch, { commentId }) => ({
  handleRemove: () => dispatch(removeComment(commentId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentActions));
