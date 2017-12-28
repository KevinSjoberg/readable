import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/fontawesome-free-solid';

const Vote = ({ score, onUpvoteClick, onDownvoteClick }) => (
  <div className="vote">
    <span className="action pr-2">
      <FontAwesomeIcon icon={faArrowUp} onClick={onUpvoteClick} />
    </span>
    <span className="pr-2">
      {score}
    </span>
    <span className="action">
      <FontAwesomeIcon icon={faArrowDown} onClick={onDownvoteClick} />
    </span>
  </div>
);

Vote.propTypes = {
  score: PropTypes.number.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired,
};

export default Vote;
