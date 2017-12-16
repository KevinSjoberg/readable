import { combineReducers } from 'redux';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions';

const categories = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        isFetching: false,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: null,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  categories,
});
