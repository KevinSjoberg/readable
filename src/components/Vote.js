import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid';

const Vote = ({ score, onUpvoteClick, onDownvoteClick }) => (
  <div>
    <FontAwesomeIcon icon={faArrowUp} onClick={onUpvoteClick} />
    <span className="px-2">{score}</span>
    <FontAwesomeIcon icon={faArrowDown} onClick={onDownvoteClick} />
  </div>
);

Vote.propTypes = {
  score: PropTypes.number.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired,
};

export default Vote;
