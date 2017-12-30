import omit from 'lodash.omit';
import union from 'lodash.union';
import { combineReducers } from 'redux';

import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_FAILURE,
  DOWNVOTE_COMMENT_REQUEST,
  DOWNVOTE_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPVOTE_COMMENT_FAILURE,
  UPVOTE_COMMENT_REQUEST,
  UPVOTE_COMMENT_SUCCESS,
} from '../actions/comments';

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return [...state, action.response.result];
    case FETCH_COMMENT_SUCCESS:
      return union(state, [action.response.result]);
    case FETCH_COMMENTS_SUCCESS:
      return action.response.result;
    case REMOVE_COMMENT_SUCCESS:
      return state.filter(id => id !== action.response.result);
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
    case FETCH_COMMENT_SUCCESS:
    case UPDATE_COMMENT_SUCCESS:
    case UPVOTE_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_SUCCESS:
      return { ...state, ...action.response.entities.comments };
    case FETCH_COMMENTS_SUCCESS:
      return action.response.entities.comments || {};
    case REMOVE_COMMENT_SUCCESS:
      return omit(state, [action.response.result]);
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case ADD_COMMENT_FAILURE:
    case DOWNVOTE_COMMENT_FAILURE:
    case FETCH_COMMENT_FAILURE:
    case FETCH_COMMENTS_FAILURE:
    case REMOVE_COMMENT_FAILURE:
    case UPDATE_COMMENT_FAILURE:
    case UPVOTE_COMMENT_FAILURE:
      return action.errorMessage;
    case ADD_COMMENT_REQUEST:
    case ADD_COMMENT_SUCCESS:
    case DOWNVOTE_COMMENT_REQUEST:
    case DOWNVOTE_COMMENT_SUCCESS:
    case FETCH_COMMENT_REQUEST:
    case FETCH_COMMENT_SUCCESS:
    case FETCH_COMMENTS_REQUEST:
    case FETCH_COMMENTS_SUCCESS:
    case REMOVE_COMMENT_REQUEST:
    case REMOVE_COMMENT_SUCCESS:
    case UPDATE_COMMENT_REQUEST:
    case UPDATE_COMMENT_SUCCESS:
    case UPVOTE_COMMENT_REQUEST:
    case UPVOTE_COMMENT_SUCCESS:
      return null;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
    case FETCH_COMMENTS_REQUEST:
      return true;
    case FETCH_COMMENT_FAILURE:
    case FETCH_COMMENT_SUCCESS:
    case FETCH_COMMENTS_FAILURE:
    case FETCH_COMMENTS_SUCCESS:
      return false;
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

export const getComment = (state, id) => state.byId[id];
export const getComments = state => state.allIds.map(id => state.byId[id]);
