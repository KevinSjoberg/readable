import PropTypes from 'prop-types';
import React from 'react';

import { anyOf, required } from '../utils/validators';
import PostForm from './PostForm';
import ValidatingForm from './ValidatingForm';

const PostValidatingForm = ({
  author,
  body,
  category,
  onSubmit,
  title,
}) => (
  <ValidatingForm
    fields={{
      author,
      body,
      category,
      title,
    }}
    Form={PostForm}
    onSubmit={onSubmit}
    validators={{
      author: [
        required,
      ],
      body: [
        required,
      ],
      category: [
        anyOf('react', 'redux', 'udacity'),
      ],
      title: [
        required,
      ],
    }}
  />
);

PostValidatingForm.defaultProps = {
  author: '',
  body: '',
  category: '',
  title: '',
};

PostValidatingForm.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default PostValidatingForm;
