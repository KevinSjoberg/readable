import API from '../utils/api';
import { getComment, getPost } from '../reducers';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const fetchCategories = () => (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  return API
    .fetchCategories()
    .then(response => response.json())
    .then(json => dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories: json.categories }))
    .catch(errorMessage => dispatch({ type: FETCH_CATEGORIES_FAILURE, errorMessage }));
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
    .catch(errorMessage => dispatch({ type: FETCH_POSTS_FAILURE, errorMessage }));
};

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const fetchPost = id => (dispatch, getState) => {
  if (getPost(getState(), id)) {
    return Promise.resolve();
  }

  dispatch({ type: FETCH_POST_REQUEST, id });

  return API
    .fetchPost(id)
    .then(response => response.json())
    .then(post => dispatch({ type: FETCH_POST_SUCCESS, post }))
    .catch(errorMessage => dispatch({ type: FETCH_POST_FAILURE, errorMessage }));
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
    .catch(errorMessage => dispatch({ type: UPVOTE_ENTITY_FAILURE, errorMessage, entityName }));
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
    .catch(errorMessage => dispatch({ type: DOWNVOTE_ENTITY_FAILURE, errorMessage, entityName }));
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
    .catch(errorMessage => dispatch({ type: REMOVE_POST_FAILURE, errorMessage }));
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
    .catch(errorMessage => dispatch({ type: FETCH_COMMENTS_FAILURE, errorMessage }));
};

export const FETCH_COMMENT_REQUEST = 'FETCH_COMMENT_REQUEST';
export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const FETCH_COMMENT_FAILURE = 'FETCH_COMMENT_FAILURE';
export const fetchComment = id => (dispatch, getState) => {
  if (getComment(getState(), id)) {
    return Promise.resolve();
  }

  dispatch({ type: FETCH_COMMENT_REQUEST, id });

  return API
    .fetchComment(id)
    .then(response => response.json())
    .then(comment => dispatch({ type: FETCH_COMMENT_SUCCESS, comment }))
    .catch(errorMessage => dispatch({ type: FETCH_COMMENT_FAILURE, errorMessage }));
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
    .catch(errorMessage => dispatch({ type: REMOVE_COMMENT_FAILURE, errorMessage }));
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
    .catch(errorMessage => dispatch({ type: UPDATE_POST_FAILURE, errorMessage }));
};

export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
export const updateComment = (id, params) => (dispatch) => {
  dispatch({ type: UPDATE_COMMENT_REQUEST, id, params });

  return API
    .updateComment(id, params)
    .then(response => response.json())
    .then(comment => dispatch({ type: UPDATE_COMMENT_SUCCESS, comment }))
    .catch(errorMessage => dispatch({ type: UPDATE_COMMENT_FAILURE, errorMessage }));
};

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const addComment = params => (dispatch) => {
  dispatch({ type: ADD_COMMENT_REQUEST, params });

  return API
    .addComment(params)
    .then(response => response.json())
    .then(comment => dispatch({ type: ADD_COMMENT_SUCCESS, comment }))
    .catch(errorMessage => dispatch({ type: ADD_COMMENT_FAILURE, errorMessage }));
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const addPost = params => (dispatch) => {
  dispatch({ type: ADD_POST_REQUEST, params });

  return API
    .addPost(params)
    .then(response => response.json())
    .then(post => dispatch({ type: ADD_POST_SUCCESS, post }))
    .catch(errorMessage => dispatch({ type: ADD_POST_FAILURE, errorMessage }));
};
