import { combineReducers } from 'redux';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions';

const initialCategoriesState = {
  isFetching: false,
  categories: [],
};

const categories = (state = initialCategoriesState, action) => {
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

const initialPostsState = {
  isFetching: false,
  posts: [],
};

const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        isFetching: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: null,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  categories,
  posts,
});
