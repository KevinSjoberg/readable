import { faTrashAlt, faPencilAlt } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Actions = ({ onEditClickPath, onRemoveClick }) => (
  <div>
    <span className="action">
      <Link to={onEditClickPath} className="pr-2">
        <FontAwesomeIcon icon={faPencilAlt} />
      </Link>
    </span>
    <span className="action">
      <FontAwesomeIcon icon={faTrashAlt} onClick={onRemoveClick} />
    </span>
  </div>
);

Actions.propTypes = {
  onEditClickPath: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default Actions;
