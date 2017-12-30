import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { removeComment } from '../actions/comments';
import Actions from './Actions';

const CommentActions = ({
  comment: { parentId, id },
  handleRemove,
  match: { params: { category } },
}) => (
  <Actions
    onEditClickPath={`/${category}/${parentId}/comments/${id}/edit`}
    onRemoveClick={handleRemove}
  />
);

CommentActions.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    parentId: PropTypes.string.isRequired,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch, { comment: { id } }) => ({
  handleRemove: () => dispatch(removeComment(id)),
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(CommentActions));
