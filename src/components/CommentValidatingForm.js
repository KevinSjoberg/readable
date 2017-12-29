import PropTypes from 'prop-types';
import React from 'react';

import { required } from '../utils/validators';
import CommentForm from './CommentForm';
import ValidatingForm from './ValidatingForm';

const CommentValidatingForm = ({
  author,
  body,
  onSubmit,
}) => (
  <ValidatingForm
    fields={{
      author,
      body,
    }}
    Form={CommentForm}
    onSubmit={onSubmit}
    validators={{
      author: [
        required,
      ],
      body: [
        required,
      ],
    }}
  />
);

CommentValidatingForm.defaultProps = {
  author: '',
  body: '',
};

CommentValidatingForm.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default CommentValidatingForm;
