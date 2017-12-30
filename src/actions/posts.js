import API from '../api';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const addPost = params => (dispatch) => {
  dispatch({ type: ADD_POST_REQUEST, params });

  return API
    .addPost(params)
    .then(response => dispatch({ type: ADD_POST_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: ADD_POST_FAILURE, errorMessage }));
};

export const DOWNVOTE_POST_REQUEST = 'DOWNVOTE_POST_REQUEST';
export const DOWNVOTE_POST_SUCCESS = 'DOWNVOTE_POST_SUCCESS';
export const DOWNVOTE_POST_FAILURE = 'DOWNVOTE_POST_FAILURE';
export const downvotePost = id => (dispatch) => {
  dispatch({ type: DOWNVOTE_POST_REQUEST, id });

  return API
    .downvotePost(id)
    .then(response => dispatch({ type: DOWNVOTE_POST_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: DOWNVOTE_POST_FAILURE, errorMessage }));
};

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const fetchPost = id => (dispatch) => {
  dispatch({ type: FETCH_POST_REQUEST, id });

  return API
    .fetchPost(id)
    .then(response => dispatch({ type: FETCH_POST_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: FETCH_POST_FAILURE, errorMessage }));
};

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const fetchPosts = category => (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST, category });

  return API
    .fetchPosts(category)
    .then(response => dispatch({ type: FETCH_POSTS_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: FETCH_POSTS_FAILURE, errorMessage }));
};

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
export const removePost = id => (dispatch) => {
  dispatch({ type: REMOVE_POST_REQUEST, id });

  return API
    .removePost(id)
    .then(response => dispatch({ type: REMOVE_POST_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: REMOVE_POST_FAILURE, errorMessage }));
};

export const SET_POST_SORT_FILTER = 'SET_POST_SORT_FILTER';
export const setPostSortFilter = sortFilter => ({
  type: SET_POST_SORT_FILTER,
  sortFilter,
});

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const updatePost = (id, params) => (dispatch) => {
  dispatch({ type: UPDATE_POST_REQUEST, id, params });

  return API
    .updatePost(id, params)
    .then(response => dispatch({ type: UPDATE_POST_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: UPDATE_POST_FAILURE, errorMessage }));
};


export const UPVOTE_POST_REQUEST = 'UPVOTE_POST_REQUEST';
export const UPVOTE_POST_SUCCESS = 'UPVOTE_POST_SUCCESS';
export const UPVOTE_POST_FAILURE = 'UPVOTE_POST_FAILURE';
export const upvotePost = id => (dispatch) => {
  dispatch({ type: UPVOTE_POST_REQUEST, id });

  return API
    .upvotePost(id)
    .then(response => dispatch({ type: UPVOTE_POST_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: UPVOTE_POST_FAILURE, errorMessage }));
};
