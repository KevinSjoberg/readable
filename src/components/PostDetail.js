import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost } from '../actions/posts';
import { getIsFetchingPosts, getPost } from '../reducers';
import FilteredCommentList from './FilteredCommentList';
import NotFound from './NotFound';
import PostActions from './PostActions';
import PostVote from './PostVote';

class PostDetail extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchPost(id);
  }

  render() {
    const { isFetching, post } = this.props;

    if (isFetching) {
      return <h1>Loading...</h1>;
    }

    if (!post) {
      return <NotFound />;
    }

    const {
      author,
      body,
      category,
      timestamp,
      title,
    } = post;

    return (
      <div>
        <h1>{title}</h1>
        <p className="text-muted">
          Written by {author} in {category} {moment(timestamp).fromNow()}
        </p>
        <p>{body}</p>
        <div className="d-flex flex-row-reverse text-muted justify-content-between">
          <div className="d-flex justify-content-between w-25">
            <PostVote post={post} />
            <PostActions post={post} />
          </div>
        </div>
        <hr />
        <FilteredCommentList />
      </div>
    );
  }
}

PostDetail.defaultProps = {
  post: null,
  isFetching: true,
};

PostDetail.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
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
    commentCount: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  isFetching: getIsFetchingPosts(state),
  post: getPost(state, ownProps.match.params.id),
});

export default withRouter(connect(
  mapStateToProps,
  { fetchPost },
)(PostDetail));
