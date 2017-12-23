import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
} from 'reactstrap';
import moment from 'moment';

const Post = ({
  id,
  timestamp,
  title,
  body,
  author,
  category,
  voteScore,
  deleted,
  commentCount,
}) => (
  <Card className="mb-3">
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle className="mb-3 text-muted">Written by{author} in {category} {moment(timestamp).fromNow()}</CardSubtitle>
      <CardText>{body}</CardText>
    </CardBody>
    <CardFooter className="text-muted">{commentCount} comments</CardFooter>
  </Card>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  deleted: PropTypes.bool.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default Post;
