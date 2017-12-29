import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

import CommentActions from './CommentActions';
import CommentVote from './CommentVote';

const Comment = ({
  author,
  body,
  id,
  parentId,
  timestamp,
  voteScore,
}) => (
  <Card className="mb-3">
    <CardBody>
      <CardTitle>{author}</CardTitle>
      <CardSubtitle className="mb-3 text-muted">{moment(timestamp).fromNow()}</CardSubtitle>
      <CardText>{body}</CardText>
    </CardBody>
    <CardFooter className="d-flex flex-row-reverse justify-content-between text-muted">
      <div className="d-flex justify-content-between w-25">
        <CommentVote comment={{ id, voteScore }} />
        <CommentActions comment={{ id, parentId }} />
      </div>
    </CardFooter>
  </Card>
);

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default Comment;
