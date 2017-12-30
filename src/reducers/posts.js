import omit from 'lodash.omit';
import union from 'lodash.union';
import { combineReducers } from 'redux';

import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DOWNVOTE_POST_FAILURE,
  DOWNVOTE_POST_REQUEST,
  DOWNVOTE_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  SET_POST_SORT_FILTER,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPVOTE_POST_FAILURE,
  UPVOTE_POST_REQUEST,
  UPVOTE_POST_SUCCESS,
} from '../actions/posts';

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
      return [...state, action.response.result];
    case FETCH_POST_SUCCESS:
      return union(state, [action.response.result]);
    case FETCH_POSTS_SUCCESS:
      return action.response.result;
    case REMOVE_POST_SUCCESS:
      return state.filter(id => id !== action.response.result);
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
    case DOWNVOTE_POST_SUCCESS:
    case FETCH_POST_SUCCESS:
    case UPDATE_POST_SUCCESS:
    case UPVOTE_POST_SUCCESS:
      return { ...state, ...action.response.entities.posts };
    case FETCH_POSTS_SUCCESS:
      return action.response.entities.posts || {};
    case REMOVE_POST_SUCCESS:
      return omit(state, [action.response.result]);
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case ADD_POST_FAILURE:
    case DOWNVOTE_POST_FAILURE:
    case FETCH_POST_FAILURE:
    case FETCH_POSTS_FAILURE:
    case REMOVE_POST_FAILURE:
    case UPDATE_POST_FAILURE:
    case UPVOTE_POST_FAILURE:
      return action.errorMessage;
    case ADD_POST_REQUEST:
    case ADD_POST_SUCCESS:
    case DOWNVOTE_POST_REQUEST:
    case DOWNVOTE_POST_SUCCESS:
    case FETCH_POST_REQUEST:
    case FETCH_POST_SUCCESS:
    case FETCH_POSTS_REQUEST:
    case FETCH_POSTS_SUCCESS:
    case REMOVE_POST_REQUEST:
    case REMOVE_POST_SUCCESS:
    case UPDATE_POST_REQUEST:
    case UPDATE_POST_SUCCESS:
    case UPVOTE_POST_REQUEST:
    case UPVOTE_POST_SUCCESS:
      return null;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
    case FETCH_POSTS_REQUEST:
      return true;
    case FETCH_POST_FAILURE:
    case FETCH_POST_SUCCESS:
    case FETCH_POSTS_FAILURE:
    case FETCH_POSTS_SUCCESS:
      return false;
    default:
      return state;
  }
};

const sortFilter = (state = 'popular', action) => {
  switch (action.type) {
    case SET_POST_SORT_FILTER:
      return action.sortFilter;
    default:
      return state;
  }
};


export default combineReducers({
  allIds,
  byId,
  errorMessage,
  isFetching,
  sortFilter,
});

export const getPost = (state, id) => state.byId[id];
export const getPosts = state => state.allIds.map(id => state.byId[id]);
export const getPostSortFilter = state => state.sortFilter;
export const getSortedPosts = (state) => {
  switch (state.sortFilter) {
    case 'new':
      return getPosts(state).sort((a, b) => b.timestamp - a.timestamp);
    case 'popular':
      return getPosts(state).sort((a, b) => b.voteScore - a.voteScore);
    default:
      return getPosts(state);
  }
};
