import API from '../utils/api';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  error,
});

export const fetchCategories = () => (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  API
    .fetchCategories()
    .then(response => response.json())
    .then(json => dispatch(fetchCategoriesSuccess(json.categories)))
    .catch(error => dispatch(fetchCategoriesFailure(error)));
};

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  error,
});

export const fetchPosts = category => (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });

  API
    .fetchPosts(category)
    .then(response => response.json())
    .then(json => dispatch(fetchPostsSuccess(json)))
    .catch(error => dispatch(fetchPostsFailure(error)));
};

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  post,
});

const fetchPostFailure = error => ({
  type: FETCH_POST_FAILURE,
  error,
});

export const fetchPost = id => (dispatch) => {
  dispatch({ type: FETCH_POST_REQUEST });

  API
    .fetchPost(id)
    .then(response => response.json())
    .then(json => dispatch(fetchPostSuccess(json)))
    .catch(error => dispatch(fetchPostFailure(error)));
};

export const UPVOTE_ENTITY_REQUEST = 'UPVOTE_ENTITY_REQUEST';
export const UPVOTE_ENTITY_SUCCESS = 'UPVOTE_ENTITY_SUCCESS';
export const UPVOTE_ENTITY_FAILURE = 'UPVOTE_ENTITY_FAILURE';
export const DOWNVOTE_ENTITY_REQUEST = 'DOWNVOTE_ENTITY_REQUEST';
export const DOWNVOTE_ENTITY_SUCCESS = 'DOWNVOTE_ENTITY_SUCCESS';
export const DOWNVOTE_ENTITY_FAILURE = 'DOWNVOTE_ENTITY_FAILURE';


export const upvote = (entity, id) => (dispatch) => {
  dispatch({ type: UPVOTE_ENTITY_REQUEST });

  API
    .upvote(entity, id)
    .then(response => response.json())
    .then(post => dispatch({ type: UPVOTE_ENTITY_SUCCESS, post }))
    .catch(error => dispatch({ type: UPVOTE_ENTITY_FAILURE, error }));
};

export const downvote = (entity, id) => (dispatch) => {
  dispatch({ type: UPVOTE_ENTITY_REQUEST });

  API
    .downvote(entity, id)
    .then(response => response.json())
    .then(post => dispatch({ type: DOWNVOTE_ENTITY_SUCCESS, post }))
    .catch(error => dispatch({ type: DOWNVOTE_ENTITY_FAILURE, error }));
};
