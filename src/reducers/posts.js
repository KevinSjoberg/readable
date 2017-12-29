import { combineReducers } from 'redux';

import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DOWNVOTE_ENTITY_FAILURE,
  DOWNVOTE_ENTITY_REQUEST,
  DOWNVOTE_ENTITY_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPVOTE_ENTITY_FAILURE,
  UPVOTE_ENTITY_REQUEST,
  UPVOTE_ENTITY_SUCCESS,
} from '../actions';
import { omit } from '../utils/helpers';

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
    case FETCH_POST_SUCCESS:
      return [...state, action.post.id];
    case FETCH_POSTS_SUCCESS:
      return action.posts.map(post => post.id);
    case REMOVE_POST_SUCCESS:
      return state.filter(id => id !== action.post.id);
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
    case FETCH_POST_SUCCESS:
    case UPDATE_POST_SUCCESS:
      return { ...state, [action.post.id]: action.post };
    case FETCH_POSTS_SUCCESS: {
      const nextState = { ...state };

      action.posts.forEach((post) => {
        nextState[post.id] = post;
      });

      return nextState;
    }
    case UPVOTE_ENTITY_SUCCESS:
    case DOWNVOTE_ENTITY_SUCCESS: {
      if (action.entityName !== 'post') {
        return state;
      }

      return { ...state, [action.entity.id]: action.entity };
    }
    case REMOVE_POST_SUCCESS:
      return omit(state, action.post.id);
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case ADD_POST_FAILURE:
    case FETCH_POST_FAILURE:
    case FETCH_POSTS_FAILURE:
    case REMOVE_POST_FAILURE:
    case UPDATE_POST_FAILURE:
      return action.errorMessage;
    case DOWNVOTE_ENTITY_FAILURE:
    case UPVOTE_ENTITY_FAILURE:
      return action.entityName === 'post' ? action.errorMessage : state;
    case ADD_POST_REQUEST:
    case ADD_POST_SUCCESS:
    case DOWNVOTE_ENTITY_REQUEST:
    case DOWNVOTE_ENTITY_SUCCESS:
    case FETCH_POST_REQUEST:
    case FETCH_POST_SUCCESS:
    case FETCH_POSTS_REQUEST:
    case FETCH_POSTS_SUCCESS:
    case REMOVE_POST_REQUEST:
    case REMOVE_POST_SUCCESS:
    case UPDATE_POST_REQUEST:
    case UPDATE_POST_SUCCESS:
    case UPVOTE_ENTITY_REQUEST:
    case UPVOTE_ENTITY_SUCCESS:
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


export default combineReducers({
  allIds,
  byId,
  errorMessage,
  isFetching,
});

export const getPost = (state, id) => state.byId[id];
export const getPosts = state => state.allIds.map(id => state.byId[id]);
