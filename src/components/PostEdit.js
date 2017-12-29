import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost, updatePost } from '../actions';
import { getPostById } from '../reducers';
import PostValidatingForm from './PostValidatingForm';

class PostEdit extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchPost(id);
  }

  handleSubmit(isValid, fields) {
    const { updatePost: doUpdatePost, history, match: { params: { id } } } = this.props;

    if (isValid) {
      doUpdatePost(id, fields).then(({ post: { category } }) => {
        history.push(`/${category}/${id}`);
      });
    }
  }

  render() {
    const { post } = this.props;

    return (
      post
        ? <PostValidatingForm onSubmit={this.handleSubmit} {...post} />
        : <h1>Loading...</h1>
    );
  }
}

PostEdit.defaultProps = {
  post: null,
};

PostEdit.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  updatePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  post: getPostById(state, id),
});

export default connect(
  mapStateToProps,
  { fetchPost, updatePost },
)(PostEdit);
