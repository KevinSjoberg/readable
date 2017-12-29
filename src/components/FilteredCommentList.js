import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import CommentList from './CommentList';
import { fetchComments } from '../actions';
import { getComments } from '../reducers';

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
    const { comments, match: { params: { category, id } } } = this.props;
    return (
      <div>
        <CommentList comments={comments} />
        <Button color="primary" tag={Link} to={`/${category}/${id}/comments/new`}>Add comment</Button>
      </div>
    );
  }
}

FilteredCommentList.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  ...CommentList.PropTypes,
};

const mapStateToProps = state => ({
  comments: getComments(state),
});

export default withRouter(connect(
  mapStateToProps,
  { fetchComments },
)(FilteredCommentList));
