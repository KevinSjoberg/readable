import API from '../utils/api';
import { getPostById } from '../reducers';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const fetchCategories = () => (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  return API
    .fetchCategories()
    .then(response => response.json())
    .then(json => dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories: json.categories }))
    .catch(error => dispatch({ type: FETCH_CATEGORIES_FAILURE, error }));
};

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const fetchPosts = category => (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST, category });

  return API
    .fetchPosts(category)
    .then(response => response.json())
    .then(posts => dispatch({ type: FETCH_POSTS_SUCCESS, posts }))
    .catch(error => dispatch({ type: FETCH_POSTS_FAILURE, error }));
};

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const fetchPost = id => (dispatch, getState) => {
  if (getPostById(getState(), id)) {
    return Promise.resolve();
  }

  dispatch({ type: FETCH_POST_REQUEST, id });

  return API
    .fetchPost(id)
    .then(response => response.json())
    .then(post => dispatch({ type: FETCH_POST_SUCCESS, post }))
    .catch(error => dispatch({ type: FETCH_POST_FAILURE, error }));
};

export const UPVOTE_ENTITY_REQUEST = 'UPVOTE_ENTITY_REQUEST';
export const UPVOTE_ENTITY_SUCCESS = 'UPVOTE_ENTITY_SUCCESS';
export const UPVOTE_ENTITY_FAILURE = 'UPVOTE_ENTITY_FAILURE';
export const upvote = (entityName, id) => (dispatch) => {
  dispatch({ type: UPVOTE_ENTITY_REQUEST, entityName, id });

  return API
    .upvote(entityName, id)
    .then(response => response.json())
    .then(entity => dispatch({ type: UPVOTE_ENTITY_SUCCESS, entity, entityName }))
    .catch(error => dispatch({ type: UPVOTE_ENTITY_FAILURE, error, entityName }));
};

export const DOWNVOTE_ENTITY_REQUEST = 'DOWNVOTE_ENTITY_REQUEST';
export const DOWNVOTE_ENTITY_SUCCESS = 'DOWNVOTE_ENTITY_SUCCESS';
export const DOWNVOTE_ENTITY_FAILURE = 'DOWNVOTE_ENTITY_FAILURE';
export const downvote = (entityName, id) => (dispatch) => {
  dispatch({ type: UPVOTE_ENTITY_REQUEST, entityName, id });

  return API
    .downvote(entityName, id)
    .then(response => response.json())
    .then(entity => dispatch({ type: DOWNVOTE_ENTITY_SUCCESS, entity, entityName }))
    .catch(error => dispatch({ type: DOWNVOTE_ENTITY_FAILURE, error, entityName }));
};

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
export const removePost = id => (dispatch) => {
  dispatch({ type: REMOVE_POST_REQUEST, id });

  return API
    .removePost(id)
    .then(response => response.json())
    .then(post => dispatch({ type: REMOVE_POST_SUCCESS, post }))
    .catch(error => dispatch({ type: REMOVE_POST_FAILURE, error }));
};

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const fetchComments = postId => (dispatch) => {
  dispatch({ type: FETCH_COMMENTS_REQUEST });

  return API
    .fetchComments(postId)
    .then(response => response.json())
    .then(comments => dispatch({ type: FETCH_COMMENTS_SUCCESS, comments }))
    .catch(error => dispatch({ type: FETCH_COMMENTS_FAILURE, error }));
};

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
export const removeComment = id => (dispatch) => {
  dispatch({ type: REMOVE_COMMENT_REQUEST, id });

  return API
    .removeComment(id)
    .then(response => response.json())
    .then(comment => dispatch({ type: REMOVE_COMMENT_SUCCESS, comment }))
    .catch(error => dispatch({ type: REMOVE_COMMENT_FAILURE, error }));
};

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const updatePost = (id, params) => (dispatch) => {
  dispatch({ type: UPDATE_POST_REQUEST, id, params });

  return API
    .updatePost(id, params)
    .then(response => response.json())
    .then(post => dispatch({ type: UPDATE_POST_SUCCESS, post }))
    .catch(error => dispatch({ type: UPDATE_POST_FAILURE, error }));
};
