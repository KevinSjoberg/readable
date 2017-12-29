import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchComment, updateComment } from '../actions';
import { getComment } from '../reducers';
import CommentValidatingForm from './CommentValidatingForm';

class CommentEdit extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchComment(id);
  }

  handleSubmit(isValid, fields) {
    const { match: { params: { category, id, postId } } } = this.props;

    if (isValid) {
      this.props.updateComment(id, fields)
        .then(() => this.props.history.push(`/${category}/${postId}`));
    }
  }

  render() {
    const { comment } = this.props;

    return (
      comment
        ? (
          <div>
            <h1>Edit comment</h1>
            <CommentValidatingForm title="Edit comment" onSubmit={this.handleSubmit} {...comment} />
          </div>
        )
        : <h1>Loading...</h1>
    );
  }
}

CommentEdit.defaultProps = {
  comment: null,
};

CommentEdit.propTypes = {
  fetchComment: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  comment: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  updateComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  comment: getComment(state, id),
});

export default connect(
  mapStateToProps,
  { fetchComment, updateComment },
)(CommentEdit);
