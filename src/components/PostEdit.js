import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost, updatePost } from '../actions/posts';
import { getPost } from '../reducers';
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
    if (isValid) {
      const { match: { params: { id } } } = this.props;
      this.props.updatePost(id, fields)
        .then(({ response }) => {
          const { entities: { posts }, result } = response;
          this.props.history.push(`/${posts[result].category}/${id}`);
        });
    }
  }

  render() {
    const { post } = this.props;

    return (
      post
        ? (
          <div>
            <h1>Edit post</h1>
            <PostValidatingForm onSubmit={this.handleSubmit} {...post} />
          </div>
        )
        : <h1>Loading...</h1>
    );
  }
}

PostEdit.defaultProps = {
  post: null,
};

PostEdit.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
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
  post: getPost(state, id),
});

export default connect(
  mapStateToProps,
  { fetchPost, updatePost },
)(PostEdit);
