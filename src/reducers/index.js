import { combineReducers } from 'redux';
import {
  DOWNVOTE_ENTITY_FAILURE,
  DOWNVOTE_ENTITY_REQUEST,
  DOWNVOTE_ENTITY_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  REMOVE_COMMENT_FAILURE,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  UPVOTE_ENTITY_FAILURE,
  UPVOTE_ENTITY_REQUEST,
  UPVOTE_ENTITY_SUCCESS,
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


const getPostIndexById = (state, id) => state.posts.findIndex(post => post.id === id);

const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POST_SUCCESS: {
      const index = getPostIndexById(state, action.post.id);
      const newPosts = index === -1
        ? [...state.posts, action.post]
        : Object.assign([], state.posts, { [index]: action.post });

      return {
        ...state,
        posts: newPosts,
        isFetching: false,
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
      if (action.entityName !== 'post') {
        return state;
      }

      return {
        ...state,
        isVoting: true,
      };
    case UPVOTE_ENTITY_SUCCESS:
    case DOWNVOTE_ENTITY_SUCCESS: {
      if (action.entityName !== 'post') {
        return state;
      }

      const index = getPostIndexById(state, action.entity.id);
      const newPosts = index === -1
        ? state.posts
        : Object.assign([], state.posts, { [index]: action.entity });

      return {
        ...state,
        posts: newPosts,
        isVoting: false,
      };
    }
    case UPVOTE_ENTITY_FAILURE:
    case DOWNVOTE_ENTITY_FAILURE:
      if (action.entityName !== 'post') {
        return state;
      }

      return {
        ...state,
        error: action.error,
        isVoting: false,
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.post.id),
      };
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case UPDATE_POST_SUCCESS: {
      const index = getPostIndexById(state, action.post.id);

      return {
        ...state,
        posts: Object.assign([], state.posts, { [index]: action.post }),
      };
    }
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

const initialCommentsState = {
  comments: [],
  isFetching: false,
  isVoting: false,
};

const comments = (state = initialCommentsState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        isFetching: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case UPVOTE_ENTITY_REQUEST:
    case DOWNVOTE_ENTITY_REQUEST:
      if (action.entityName !== 'comment') {
        return state;
      }

      return {
        ...state,
        isVoting: true,
      };
    case UPVOTE_ENTITY_SUCCESS:
    case DOWNVOTE_ENTITY_SUCCESS: {
      if (action.entityName !== 'comment') {
        return state;
      }

      const index = state.comments.findIndex(comment => comment.id === action.entity.id);
      const newComments = index === -1
        ? state.comments
        : Object.assign([], state.comments, { [index]: action.entity });

      return {
        ...state,
        comments: newComments,
        isVoting: false,
      };
    }
    case UPVOTE_ENTITY_FAILURE:
    case DOWNVOTE_ENTITY_FAILURE:
      if (action.entityName !== 'comment') {
        return state;
      }

      return {
        ...state,
        error: action.error,
        isVoting: false,
      };
    case REMOVE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.comment.id),
      };
    case REMOVE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getCommentById = (state, id) =>
  state.comments.comments.find(comment => comment.id === id);

export const getPostById = (state, id) =>
  state.posts.posts.find(post => post.id === id);

export default combineReducers({
  categories,
  comments,
  posts,
});
