import { combineReducers } from 'redux';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  UPVOTE_ENTITY_REQUEST,
  UPVOTE_ENTITY_SUCCESS,
  UPVOTE_ENTITY_FAILURE,
  DOWNVOTE_ENTITY_REQUEST,
  DOWNVOTE_ENTITY_SUCCESS,
  DOWNVOTE_ENTITY_FAILURE,
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
  isVoting: false,
  posts: [],
};

const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POST_SUCCESS: {
      const index = state.posts.findIndex(post => post.id === action.post.id);
      const newPosts = index === -1
        ? [...state.posts, action.post]
        : Object.assign([], state.posts, { [index]: action.post });

      return {
        ...state,
        posts: newPosts,
      };
    }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        isFetching: false,
      };
    case FETCH_POST_FAILURE:
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case UPVOTE_ENTITY_REQUEST:
    case DOWNVOTE_ENTITY_REQUEST:
      return {
        ...state,
        isVoting: true,
      };
    case UPVOTE_ENTITY_SUCCESS:
    case DOWNVOTE_ENTITY_SUCCESS: {
      const index = state.posts.findIndex(post => post.id === action.post.id);
      const newPosts = index === -1
        ? state.posts
        : Object.assign([], state.posts, { [index]: action.post });

      return {
        ...state,
        posts: newPosts,
        isVoting: false,
      };
    }
    case UPVOTE_ENTITY_FAILURE:
    case DOWNVOTE_ENTITY_FAILURE:
      return {
        ...state,
        error: action.error,
        isVoting: false,
      };
    default:
      return state;
  }
};

export const getPostbyId = (state, id) => state.posts.find(post => post.id === id);

export default combineReducers({
  categories,
  posts,
});
