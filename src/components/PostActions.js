import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { removePost } from '../actions/posts';
import Actions from './Actions';

const PostActions = ({
  handleRemove,
  post: { category, id },
}) => (
  <Actions
    onEditClickPath={`/${category}/${id}/edit`}
    onRemoveClick={handleRemove}
  />
);

PostActions.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleRemove: () => {
    const { match: { params: { category } }, post: { id } } = ownProps;
    const redirectTo = category ? `/${category}` : '/';
    dispatch(removePost(id))
      .then(() => ownProps.history.push(redirectTo));
  },
});

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(PostActions));
