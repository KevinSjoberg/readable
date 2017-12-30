import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uuidv4 } from 'uuid';

import { addPost } from '../actions/posts';
import PostValidatingForm from './PostValidatingForm';

class PostAdd extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(isValid, fields) {
    if (isValid) {
      this.props.addPost({
        ...fields,
        id: uuidv4(),
        timestamp: Date.now(),
      })
        .then(({ post: { category } }) => {
          this.props.history.push(`/${category}`);
        });
    }
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <PostValidatingForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

PostAdd.propTypes = {
  addPost: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  null,
  { addPost },
)(PostAdd);
