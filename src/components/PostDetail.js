import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost } from '../actions';
import { getPostbyId } from '../reducers';

class PostDetail extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchPost(id);
  }

  render() {
    if (!this.props.post) {
      return <h1>Loading...</h1>;
    }

    const {
      author,
      body,
      category,
      timestamp,
      title,
    } = this.props.post;

    return (
      <div>
        <h1>{title}</h1>
        <p className="text-muted">Written by{author} in {category} {moment(timestamp).fromNow()}</p>
        <p>{body}</p>
      </div>
    );
  }
}

PostDetail.defaultProps = {
  post: null,
};

PostDetail.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    commentCount: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  post: getPostbyId(state.posts, ownProps.match.params.id),
});

export default withRouter(connect(
  mapStateToProps,
  { fetchPost },
)(PostDetail));
