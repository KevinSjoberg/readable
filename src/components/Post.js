import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

import PostActions from './PostActions';
import PostVote from './PostVote';

const Post = ({
  author,
  body,
  category,
  commentCount,
  id,
  timestamp,
  title,
  voteScore,
}) => (
  <Card className="mb-3">
    <CardBody>
      <CardTitle>
        <Link to={`${category}/${id}`}>{title}</Link>
      </CardTitle>
      <CardSubtitle className="mb-3 text-muted">
        Written by {author} in {category} {moment(timestamp).fromNow()}
      </CardSubtitle>
      <CardText>{body}</CardText>
    </CardBody>
    <CardFooter className="d-flex justify-content-between text-muted">
      <span className="mr-auto">{commentCount} comments</span>
      <div className="d-flex justify-content-between w-25">
        <PostVote post={{ id, voteScore }} />
        <PostActions post={{ id, category }} />
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
  voteScore: PropTypes.number.isRequired,
};

export default Post;
