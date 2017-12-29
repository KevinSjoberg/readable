import { combineReducers } from 'redux';

import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  DOWNVOTE_ENTITY_FAILURE,
  DOWNVOTE_ENTITY_REQUEST,
  DOWNVOTE_ENTITY_SUCCESS,
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
  UPVOTE_ENTITY_FAILURE,
  UPVOTE_ENTITY_REQUEST,
  UPVOTE_ENTITY_SUCCESS,
} from '../actions';

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENT_SUCCESS:
      return [...state, action.comment.id];
    case FETCH_COMMENTS_SUCCESS:
      return action.comments.map(comment => comment.id);
    case REMOVE_COMMENT_SUCCESS:
      return state.filter(id => id !== action.comment.id);
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
    case FETCH_COMMENT_SUCCESS:
    case UPDATE_COMMENT_SUCCESS:
      return { ...state, [action.comment.id]: action.comment };
    case FETCH_COMMENTS_SUCCESS: {
      const nextState = { ...state };

      action.comments.forEach((comment) => {
        nextState[comment.id] = comment;
      });

      return nextState;
    }
    case UPVOTE_ENTITY_SUCCESS:
    case DOWNVOTE_ENTITY_SUCCESS: {
      if (action.entityName !== 'comment') {
        return state;
      }

      return { ...state, [action.entity.id]: action.entity };
    }
    case REMOVE_COMMENT_SUCCESS:
      return Object.keys(state).reduce((nextState, id) => {
        if (id === action.comment.id) {
          return nextState;
        }

        return { ...nextState, [id]: state[id] };
      }, {});
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case ADD_COMMENT_FAILURE:
    case FETCH_COMMENT_FAILURE:
    case FETCH_COMMENTS_FAILURE:
    case REMOVE_COMMENT_FAILURE:
    case UPDATE_COMMENT_FAILURE:
      return action.errorMessage;
    case DOWNVOTE_ENTITY_FAILURE:
    case UPVOTE_ENTITY_FAILURE:
      return action.entityName === 'comment' ? action.errorMessage : state;
    case ADD_COMMENT_REQUEST:
    case ADD_COMMENT_SUCCESS:
    case DOWNVOTE_ENTITY_REQUEST:
    case DOWNVOTE_ENTITY_SUCCESS:
    case FETCH_COMMENT_REQUEST:
    case FETCH_COMMENT_SUCCESS:
    case FETCH_COMMENTS_REQUEST:
    case FETCH_COMMENTS_SUCCESS:
    case REMOVE_COMMENT_REQUEST:
    case REMOVE_COMMENT_SUCCESS:
    case UPDATE_COMMENT_REQUEST:
    case UPDATE_COMMENT_SUCCESS:
    case UPVOTE_ENTITY_REQUEST:
    case UPVOTE_ENTITY_SUCCESS:
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
