import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

import { removePost } from '../actions';
import PostVote from './PostVote';

const Post = ({
  id,
  timestamp,
  title,
  body,
  author,
  category,
  commentCount,
  removePost: doRemovePost,
}) => (
  <Card className="mb-3">
    <CardBody>
      <CardTitle>
        <Link to={`${category}/${id}`}>{title}</Link>
      </CardTitle>
      <CardSubtitle className="mb-3 text-muted">
        Written by{author} in {category} {moment(timestamp).fromNow()}
      </CardSubtitle>
      <CardText>{body}</CardText>
    </CardBody>
    <CardFooter className="text-muted">
      <div className="float-left">
        <span>{commentCount} comments</span>
      </div>
      <div className="float-right">
        <PostVote postId={id} />
        <button onClick={() => doRemovePost(id)}>Remove</button>
      </div>
    </CardFooter>
  </Card>
);

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired,
};

export default connect(null, { removePost })(Post);
