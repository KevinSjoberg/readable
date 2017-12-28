import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
} from 'reactstrap';

import Vote from './Vote';
import { upvote, downvote } from '../actions';

const Post = ({
  id,
  timestamp,
  body,
  author,
  voteScore,
  upvote: doUpvote,
  downvote: doDownvote,
}) => (
  <Card className="mb-3">
    <CardBody>
      <CardTitle>Written by{author} {moment(timestamp).fromNow()}</CardTitle>
      <CardText>{body}</CardText>
    </CardBody>
    <CardFooter className="text-muted">
      <div className="float-right">
        <Vote
          score={voteScore}
          onUpvoteClick={() => doUpvote('comment', id)}
          onDownvoteClick={() => doDownvote('comment', id)}
        />
      </div>
    </CardFooter>
  </Card>
);

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  downvote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  upvote: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired,
};

export default connect(null, { upvote, downvote })(Post);
