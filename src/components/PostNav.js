import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavLink } from 'reactstrap';

import { setPostSortFilter } from '../actions/posts';
import { getPostSortFilter } from '../reducers';

const PostNav = ({ sortFilter, setPostSortFilter: sortBy }) => (
  <div className="mb-3">
    <Nav tabs>
      <NavLink href="#" active={sortFilter === 'popular'} onClick={() => sortBy('popular')}>
        Popular
      </NavLink>
      <NavLink href="#" active={sortFilter === 'new'} onClick={() => sortBy('new')}>
        New
      </NavLink>
    </Nav>
  </div>
);

PostNav.propTypes = {
  setPostSortFilter: PropTypes.func.isRequired,
  sortFilter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  sortFilter: getPostSortFilter(state),
});

export default connect(
  mapStateToProps,
  { setPostSortFilter },
)(PostNav);
