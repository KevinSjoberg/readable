import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchComments } from '../actions';
import CommentList from './CommentList';

class FilteredCommentList extends Component {
  componentDidMount() {
    const { match: { params: { id: postId } } } = this.props;
    this.props.fetchComments(postId);
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: postId } } } = this.props;
    const { match: { params: { id: prevPostId } } } = prevProps;
    if (postId !== prevPostId) {
      this.props.fetchComments(postId);
    }
  }

  render() {
    const { comments } = this.props;
    return <CommentList comments={comments} />;
  }
}

FilteredCommentList.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  ...CommentList.PropTypes,
};

const mapStateToProps = state => ({
  comments: state.comments.comments,
});

export default withRouter(connect(
  mapStateToProps,
  { fetchComments },
)(FilteredCommentList));
