import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/fontawesome-free-solid';

const Vote = ({ score, onUpvoteClick, onDownvoteClick }) => (
  <div>
    <FontAwesomeIcon icon={faThumbsUp} onClick={onUpvoteClick} />
    <span className="px-2">{score}</span>
    <FontAwesomeIcon icon={faThumbsDown} onClick={onDownvoteClick} />
  </div>
);

Vote.propTypes = {
  score: PropTypes.number.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired,
};

export default Vote;
