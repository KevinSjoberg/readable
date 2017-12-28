import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
} from 'reactstrap';

import CommentActions from './CommentActions';
import CommentVote from './CommentVote';

const Comment = ({
  id,
  timestamp,
  body,
  author,
}) => (
  <Card className="mb-3">
    <CardBody>
      <CardTitle>Written by{author} {moment(timestamp).fromNow()}</CardTitle>
      <CardText>{body}</CardText>
    </CardBody>
    <CardFooter className="d-flex flex-row-reverse justify-content-between text-muted">
      <div className="d-flex justify-content-between w-25">
        <CommentVote commentId={id} />
        <CommentActions commentId={id} />
      </div>
    </CardFooter>
  </Card>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Comment;
