import { combineReducers } from 'redux';

import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from '../actions/categories';

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.response.result;
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.response.entities.categories;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return true;
    case FETCH_CATEGORIES_FAILURE:
    case FETCH_CATEGORIES_SUCCESS:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_FAILURE:
      return action.errorMessage;
    case FETCH_CATEGORIES_REQUEST:
    case FETCH_CATEGORIES_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  allIds,
  byId,
  errorMessage,
  isFetching,
});

export const getCategories = state => state.allIds.map(id => state.byId[id]);
