import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost } from '../actions';
import { getPost } from '../reducers';
import FilteredCommentList from './FilteredCommentList';
import PostActions from './PostActions';
import PostVote from './PostVote';

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
      post: {
        author,
        body,
        category,
        id,
        timestamp,
        title,
      },
    } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p className="text-muted">Written by {author} in {category} {moment(timestamp).fromNow()}</p>
        <p>{body}</p>
        <div className="d-flex flex-row-reverse text-muted justify-content-between">
          <div className="d-flex justify-content-between w-25">
            <PostVote postId={id} />
            <PostActions postId={id} />
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
    commentCount: PropTypes.number.isRequired,
  }),
};

const mapStateToProps = (state, ownProps) => ({
  post: getPost(state, ownProps.match.params.id),
});

export default withRouter(connect(
  mapStateToProps,
  { fetchPost },
)(PostDetail));
