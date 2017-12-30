import API from '../api';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const addComment = params => (dispatch) => {
  dispatch({ type: ADD_COMMENT_REQUEST, params });

  return API
    .addComment(params)
    .then(response => dispatch({ type: ADD_COMMENT_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: ADD_COMMENT_FAILURE, errorMessage }));
};

export const DOWNVOTE_COMMENT_REQUEST = 'DOWNVOTE_COMMENT_REQUEST';
export const DOWNVOTE_COMMENT_SUCCESS = 'DOWNVOTE_COMMENT_SUCCESS';
export const DOWNVOTE_COMMENT_FAILURE = 'DOWNVOTE_COMMENT_FAILURE';
export const downvoteComment = id => (dispatch) => {
  dispatch({ type: DOWNVOTE_COMMENT_REQUEST, id });

  return API
    .downvoteComment(id)
    .then(response => dispatch({ type: DOWNVOTE_COMMENT_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: DOWNVOTE_COMMENT_FAILURE, errorMessage }));
};


export const FETCH_COMMENT_REQUEST = 'FETCH_COMMENT_REQUEST';
export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const FETCH_COMMENT_FAILURE = 'FETCH_COMMENT_FAILURE';
export const fetchComment = id => (dispatch) => {
  dispatch({ type: FETCH_COMMENT_REQUEST, id });

  return API
    .fetchComment(id)
    .then(response => dispatch({ type: FETCH_COMMENT_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: FETCH_COMMENT_FAILURE, errorMessage }));
};

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const fetchComments = postId => (dispatch) => {
  dispatch({ type: FETCH_COMMENTS_REQUEST });

  return API
    .fetchComments(postId)
    .then(response => dispatch({ type: FETCH_COMMENTS_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: FETCH_COMMENTS_FAILURE, errorMessage }));
};

export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
export const updateComment = (id, params) => (dispatch) => {
  dispatch({ type: UPDATE_COMMENT_REQUEST, id, params });

  return API
    .updateComment(id, params)
    .then(response => dispatch({ type: UPDATE_COMMENT_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: UPDATE_COMMENT_FAILURE, errorMessage }));
};

export const UPVOTE_COMMENT_REQUEST = 'UPVOTE_COMMENT_REQUEST';
export const UPVOTE_COMMENT_SUCCESS = 'UPVOTE_COMMENT_SUCCESS';
export const UPVOTE_COMMENT_FAILURE = 'UPVOTE_COMMENT_FAILURE';
export const upvoteComment = id => (dispatch) => {
  dispatch({ type: UPVOTE_COMMENT_REQUEST, id });

  return API
    .upvoteComment(id)
    .then(response => dispatch({ type: UPVOTE_COMMENT_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: UPVOTE_COMMENT_FAILURE, errorMessage }));
};

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
export const removeComment = id => (dispatch) => {
  dispatch({ type: REMOVE_COMMENT_REQUEST, id });

  return API
    .removeComment(id)
    .then(response => dispatch({ type: REMOVE_COMMENT_SUCCESS, response }))
    .catch(errorMessage => dispatch({ type: REMOVE_COMMENT_FAILURE, errorMessage }));
};
