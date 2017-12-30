import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addComment } from '../actions/comments';
import CommentValidatingForm from './CommentValidatingForm';

const CommentAdd = (props) => {
  const handleSubmit = (isValid, fields) => {
    const { match: { params: { category, postId } } } = props;

    if (isValid) {
      props.addComment({
        ...fields,
        id: uuidv4(),
        parentId: postId,
        timestamp: Date.now(),
      })
        .then(() => props.history.push(`/${category}/${postId}`));
    }
  };

  return (
    <div>
      <h1>Add comment</h1>
      <CommentValidatingForm onSubmit={handleSubmit} />
    </div>
  );
};

CommentAdd.propTypes = {
  addComment: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(null, { addComment })(CommentAdd);
