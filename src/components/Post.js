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

import Vote from './Vote';
import { upvote, downvote } from '../actions';

const Post = ({
  id,
  timestamp,
  title,
  body,
  author,
  category,
  voteScore,
  commentCount,
  upvote: doUpvote,
  downvote: doDownvote,
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
        <Vote
          score={voteScore}
          onUpvoteClick={() => doUpvote('post', id)}
          onDownvoteClick={() => doDownvote('post', id)}
        />
      </div>
    </CardFooter>
  </Card>
);

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  downvote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  upvote: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default connect(null, { upvote, downvote })(Post);
