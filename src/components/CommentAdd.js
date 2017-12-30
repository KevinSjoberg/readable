import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uuidv4 } from 'uuid';

import { addComment } from '../actions';
import CommentValidatingForm from './CommentValidatingForm';

class CommentAdd extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(isValid, fields) {
    const { match: { params: { category, postId } } } = this.props;

    if (isValid) {
      this.props.addComment({
        ...fields,
        id: uuidv4(),
        parentId: postId,
        timestamp: Date.now(),
      })
        .then(() => this.props.history.push(`/${category}/${postId}`));
    }
  }

  render() {
    return (
      <div>
        <h1>Add comment</h1>
        <CommentValidatingForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

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

export default connect(
  null,
  { addComment },
)(CommentAdd);
